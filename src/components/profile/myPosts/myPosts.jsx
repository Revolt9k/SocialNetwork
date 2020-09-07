import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';



const MyPosts = (props) => {

    let mappedPosts = props.posts.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

    let newPostRef = React.createRef()

    let addPost = () => {
        if (props.newPostText!=false) {
            props.dispatch({type: 'addPost'})
        } else {
            alert("You must type some!")
        }

    }

    let removeLastPost = () => {
        props.dispatch({type: 'removePost'})
    }

    let onPostChange = () => {
        let text = newPostRef.current.value
        props.dispatch({type: 'changePost', text: text })
    }

    return <container>

            <div className={classes.textzone}>
                <textarea  onChange={onPostChange} className={classes.textarea} ref={newPostRef} value={props.newPostText} ></textarea>
                <button onClick={addPost} className={classes.button + " " + classes.buttonAdd}>Add post</button>
                <button onClick={removeLastPost} className={classes.button + " " +  classes.buttonRemove}>Remove Last post</button>
            </div>
        {mappedPosts}


    </container>
}


export default MyPosts