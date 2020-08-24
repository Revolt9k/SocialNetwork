import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogsItem from "./components/dialogs/dialogsItem/dialogsItem";
import Messagies from "./components/dialogs/messagies/messagies";
import Post from "./components/profile/myPosts/Post/post";
import classes from "./components/profile/Profile.module.css";


    let dialogsData = [
        {id: 1, name: "Konstantin", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
        {id: 2, name: "Anastasia", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
        {id: 3, name: "Anton", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
        {id: 4, name: "Vitaly", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
        {id: 5, name: "Valeria", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
    ]
    let mappedDialogs = dialogsData
        .map( (dialog) => <DialogsItem id={dialog.id} name={dialog.name} imgUrl={dialog.imgUrl} /> );


    let messagiesData = [
            {id: 1, message: "Dialog with current user", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
            {id: 2, message: "hey", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
            {id: 3, message: "you", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
            {id: 4, message: "you", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
            {id: 5, message: "hey", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
        ]
    let mappedMessagies = messagiesData
            .map ((message) => <Messagies message={message.message} /> )

    let postsData = [
            {id: 1, message: "how are you", author:'good boy', avaUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg"},
            {id: 2, message: "come on baby",author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
            {id: 3, message: "what?", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3017.jpg"},
            {id: 4, message: "learning react", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
            {id: 5, message: "right now",author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg"},
            {id: 6, message: "hey ho", author:'random boy',avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg"}
        ]
    let mappedPosts = postsData.map((post) => <Post className={classes.item} message={post.message} author={post.author}  avaUrl={post.avaUrl}/> )




ReactDOM.render(
  <React.StrictMode>
      <App dialogs={mappedDialogs} posts={mappedPosts} messagies={mappedMessagies}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
