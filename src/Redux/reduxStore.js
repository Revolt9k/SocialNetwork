import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import peopleReducer from "./peopleReducer";
import photosReducer from "./photosReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    peoplePage: peopleReducer,
    photosPage: photosReducer,
    auth: authReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
// в консоли store.getState()

export default store