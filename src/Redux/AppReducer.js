import {authThunk} from "./AuthReducer";

const SET_INITIALISE = 'SET_INITIALISE';

let initialState = {
    isInitialaised: false,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALISE: {
            return {
                ...state,
                isInitialaised: true
            }
        }
        default :
            return state;
    }
}
export const initialiseSuccess = () => ({type: SET_INITIALISE})

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(authThunk());
    Promise.all([promise])
       .then(() => {
        dispatch(initialiseSuccess())
    })
}


export default AppReducer