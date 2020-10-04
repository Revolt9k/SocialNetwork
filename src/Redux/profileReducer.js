import * as axios from "axios";
import {profileAPI} from "../API/api";
const ADD_POST = 'addPost';
const CHANGE_POST = 'changePost';
const REMOVE_POST = 'removePost';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const CHANGE_STATUS = 'CHANGE_STATUS'

let initialState = {
    postsData: [
        {
            id: 1,
            message: "how are you",
            author: 'good boy',
            avaUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg"
        },
        {
            id: 2,
            message: "learning react",
            author: 'You',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar568.jpg"
        },
        {
            id: 3,
            message: "what?",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3017.jpg"
        },
        {
            id: 4,
            message: "come on baby",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"
        },
        {
            id: 5,
            message: "right now",
            author: 'random girl',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg"
        },
        {
            id: 6,
            message: "hey ho",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg"
        },
        {
            id: 7,
            message: "hey ho howdi ho",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1449.jpg"
        }
    ],
    newPostTextValue: "",
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            if (state.newPostTextValue != false) {
                let newPost = {
                    id: null,
                    message: state.newPostTextValue,
                    author: "You",
                    avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar568.jpg"

                };
                return {
                    ...state,
                    postsData: [newPost, ...state.postsData],
                    newPostTextValue: "",
                }
            } else {
                alert("You must type some!")
                return state
            }
        case CHANGE_POST : {
            return {
                ...state,
                newPostTextValue: action.text
            }
        }
        case REMOVE_POST : {
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.splice(0, 1)
            return stateCopy;
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case SET_STATUS : {
            return {...state, status: action.status}
        }
        default :
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})

export const onPostChange = (text) => ({type: CHANGE_POST, text: text})

export const removePost = () => ({type: REMOVE_POST})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getCurrentProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

// thunk
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
         profileAPI.updateStatus(status).then(response => {
             if (response.data.resultCode === 0) {
                 dispatch(setStatus(status))
             }
        })
    }
}

export default profileReducer