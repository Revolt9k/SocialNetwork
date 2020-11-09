import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    id: null,
    login: null,
    isAuth: false,
    captcha: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_CAPTCHA: {
            if (!state.captcha) {
                return {
                    ...state,
                    captcha: action.captcha,
                }
            } else {
                if(action.captcha) {
                    alert('Captcha is wrong!')
                    return {
                        ...state,
                        captcha: action.captcha,
                    }
                } else {
                    return {
                        ...state,
                        captcha: action.captcha,
                    }
                }
            }

        }

        default :
            return state;
    }

}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {
        userId, email, login, isAuth
    }
})

export const setCaptcha = (captcha) => ({
    type: SET_CAPTCHA, captcha
})

export const authThunk = () => async (dispatch) => {

    let data = await authAPI.auth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.data.resultCode === 0) {
        dispatch(authThunk())
    } else {
        if (data.data.messages[0] === "Incorrect anti-bot symbols") {
            let captchaData = await authAPI.getCaptcha()
            dispatch(setCaptcha(captchaData.data.url))
        } else {
            alert(data.data.messages)
        }
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(setCaptcha(null))
    }
}


export default authReducer