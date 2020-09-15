import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import peopleReducer from "./peopleReducer";
import photosReducer from "./photosReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    peoplePage: peopleReducer,
    photosPage: photosReducer
});


let store = createStore(reducers)

export default store