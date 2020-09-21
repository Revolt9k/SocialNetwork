import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';


// class MyPosts extends React.Component {
//     constructor(props) {
//         super(props);
//         this.mappedPosts = props.posts.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )
//         this.newPostRef = React.createRef()
//
//     }
//     componentDidMount() {
//         alert("did mount")
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         alert("did update")
//     }
//
//     addPost = () => {
//         this.props.addPost()
//     }
//     removeLastPost = () => {
//         this.props.removeLastPost()
//     }
//     onPostChange = () => {
//         let text = this.newPostRef.current.value
//         this.props.onPostChange(text)
//     }
//     render() { return <container>
//
//         <div className={classes.textzone}>
//             <textarea  onChange={this.onPostChange} className={classes.textarea} ref={this.newPostRef} value={this.props.newPostText} ></textarea>
//             <button onClick={this.addPost} className={classes.button + " " + classes.buttonAdd}>Add post</button>
//             <button onClick={this.removeLastPost} className={classes.button + " " +  classes.buttonRemove}>Remove Last post</button>
//         </div>
//
//         {this.mappedPosts}
//
//     </container>
//
//     }
//
// }

const MyPosts = (props) => {

    let mappedPosts = props.posts.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

    let newPostRef = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let removeLastPost = () => {
        props.removeLastPost()
    }

    let onPostChange = () => {
        let text = newPostRef.current.value
        props.onPostChange(text)
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