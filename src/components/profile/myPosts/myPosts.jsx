import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import ListGroup from "react-bootstrap/ListGroup";




const MyPosts = (props) => {

    let mappedPosts = props.posts.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

    return <container>

            <div className={classes.textzone}>
                <textarea className={classes.textarea} name="" id="" ></textarea>
                <button className={classes.button}>Add post</button>
                <button className={classes.button}>Remove</button>
            </div>
        {mappedPosts}


    </container>
}


export default MyPosts