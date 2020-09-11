import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./myPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    let addPost = () => {
                        if (state.profilePage.newPostTextValue != false) {
                            store.dispatch(addPostActionCreator())
                        } else {
                            alert("You must type some!")
                        }
                    }

                    let removeLastPost = () => {
                        store.dispatch(removePostActionCreator())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(onPostChangeActionCreator(text))
                    }
                    debugger;
                    return <MyPosts addPost={addPost}
                                    onPostChange={onPostChange}
                                    removeLastPost={removeLastPost}
                                    posts={state.profilePage.postsData}
                                    newPostText={state.profilePage.newPostTextValue}/>

                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer