import React from "react";
import classes from './people.module.css';


const People = (props) => {

    if(props.peopleList.length === 0) {
        props.setusers([
            {
                id: 1,
                fullname: "Aleksandr",
                location: {city: "Moscow", country: "Russia"},
                status: "Hello there",
                isFollowing: true,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
            },
            {
                id: 2,
                fullname: "Nikolay",
                location: {city: "Omsk", country: "Russia"},
                status: "I'm boss",
                isFollowing: false,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
            },
            {
                id: 3,
                fullname: "Masha",
                location: {city: "Novosibirsk", country: "Russia"},
                status: "Looking for love",
                isFollowing: true,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
            },
        ],)
    }


    return <div className={classes.content}>

        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-12'}>

                {props.peopleList.map((user) => <div key={user.id}>
                    <div>
                        <img src={user.avaUrl} alt=""/>
                    </div>
                    <div>
                        {user.isFollowing ? <button onClick={ () => {props.unfollow(user.id)}}> unfollow </button> : <button onClick={ () => {props.follow(user.id)}}> follow </button>}
                    </div>
                             <div> {user.fullname}</div>
                          <div>{user.status}</div>
                             <div>{user.location.city}  </div>
                </div>)}
            </div>
        </div>
    </div>
}

export default People