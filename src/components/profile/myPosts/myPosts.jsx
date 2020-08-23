import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

const MyPosts = () => {
    return <container>

            <div className={classes.textzone}>
                <textarea className={classes.textarea} name="" id="" ></textarea>
                <button className={classes.button}>Add post</button>
                <button className={classes.button}>Remove</button>
            </div>
            <Post className={classes.item} message='how are you' author='good boy' avaUrl='https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg'/>
            <Post className={classes.item}message='come on baby' author='bad boy' avaUrl='https://cs16planet.ru/steam-avatars/images/avatar1833.jpg'/>
            <Post className={classes.item}message='what?' author='random boy'avaUrl= 'https://cs16planet.ru/steam-avatars/images/avatar3017.jpg'/>
            <Post className={classes.item}message='learning react' author='random boy'avaUrl='https://cs16planet.ru/steam-avatars/images/avatar3141.jpg'/>
            <Post className={classes.item}message='right now' author='random boy'avaUrl='https://cs16planet.ru/steam-avatars/images/avatar2672.jpg'/>
            <Post className={classes.item}message='hey ho' author='random boy'avaUrl='https://cs16planet.ru/steam-avatars/images/avatar449.jpg'/>


    </container>
}


export default MyPosts