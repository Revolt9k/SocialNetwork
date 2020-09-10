import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./myPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        if (state.profilePage.newPostTextValue!=false) {
            props.store.dispatch(addPostActionCreator())
        } else {
            alert("You must type some!")
        }
    }

    let removeLastPost = () => {
        props.store.dispatch(removePostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return <MyPosts addPost={addPost}
                    onPostChange={onPostChange}
                    removeLastPost={removeLastPost}
                    posts={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostTextValue}/>
}


export default MyPostsContainer