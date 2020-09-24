import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import peopleReducer from "./peopleReducer";
import photosReducer from "./photosReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    peoplePage: peopleReducer,
    photosPage: photosReducer,
    auth: authReducer
});


let store = createStore(reducers)

window.store = store;
// в консоли store.getState()

export default store