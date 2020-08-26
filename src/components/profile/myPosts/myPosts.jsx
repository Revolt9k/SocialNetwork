import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';




const MyPosts = (props) => {

    let mappedPosts = props.posts.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

    let newPostRef = React.createRef()

    let addPost = () => {
        let text = newPostRef.current.value
        if (text!=false) {
            props.addPost(text)
            newPostRef.current.value = " "
        } else {
            alert("You must type some!")
        }

    }

    let removeLastPost = () => {
        props.removePost()
    }

    return <container>

            <div className={classes.textzone}>
                <textarea  className={classes.textarea} ref={newPostRef}  ></textarea>
                <button onClick={addPost} className={classes.button + " " + classes.buttonAdd}>Add post</button>
                <button onClick={removeLastPost} className={classes.button + " " +  classes.buttonRemove}>Remove Last post</button>
            </div>
        {mappedPosts}


    </container>
}


export default MyPosts