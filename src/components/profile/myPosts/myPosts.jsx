import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

let postsData = [
    {id: 1, message: "how are you", author:'good boy', avaUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg"},
    {id: 2, message: "come on baby",author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
    {id: 3, message: "what?", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3017.jpg"},
    {id: 4, message: "learning react", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
    {id: 5, message: "right now",author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg"},
    {id: 6, message: "hey ho", author:'random boy',avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg"}
]

let mappedPosts = postsData.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )

const MyPosts = () => {
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