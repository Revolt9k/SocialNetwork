import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import MyPostForm from "./Post/myPostForm";


const MyPosts = (props) => {

    let mappedPosts = props.posts.map((post) => <Post key={post.id} className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

    return <div>

        <MyPostForm addPost={props.addPost} removeLastPost={props.removeLastPost}/>

        {mappedPosts}

    </div>
}


export default MyPosts