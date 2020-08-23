import React from "react";
import classes from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Messagies from "./messagies/messagies";

let dialogsData = [
    {id: 1, name: "Konstantin", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
    {id: 2, name: "Anastasia", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
    {id: 3, name: "Anton", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
    {id: 4, name: "Vitaly", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
    {id: 5, name: "Valeria", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
    ]



let messagiesData = [
    {id: 1, message: "Dialog with current user", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
    {id: 2, message: "hey", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
    {id: 3, message: "you", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
    {id: 4, message: "you", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
    {id: 5, message: "hey", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
]

let mappedDialogs = dialogsData
    .map( (dialog) => <DialogsItem id={dialog.id} name={dialog.name} imgUrl={dialog.imgUrl} /> );

let mappedMessagies = messagiesData
    .map ((message) => <Messagies message={message.message} /> )

const dialogs = (props) => {
    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-4'}>

                {mappedDialogs}

            </div>
            <div className={classes.col + " " + 'col-xs-8'}>

                {mappedMessagies}

            </div>

        </div>
    </div>
}

export default dialogs