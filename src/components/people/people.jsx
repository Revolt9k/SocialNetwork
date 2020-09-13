import React from "react";
import classes from './people.module.css';


const People = (props) => {

    if (props.peopleList.length === 0) {
        props.setusers([
            {
                id: 1,
                fullname: "Aleksandr Sokolov",
                location: {city: "Moscow", country: "Russia"},
                status: "Hello there",
                isFollowing: true,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3095.jpg",
            },
            {
                id: 2,
                fullname: "Nikolay Zdorovenko",
                location: {city: "Omsk", country: "Russia"},
                status: "I'm boss",
                isFollowing: false,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3101.jpg",
            },
            {
                id: 3,
                fullname: "Masha Alimova",
                location: {city: "Novosibirsk", country: "Russia"},
                status: "Looking for love",
                isFollowing: false,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar2962.jpg",
            },
            {
                id: 4,
                fullname: "Vika Rokova",
                location: {city: "Chelyabinsk", country: "Russia"},
                status: ";p",
                isFollowing: true,
                avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3267.jpg",
            },
        ],)
    }


    return <div className={classes.content}>

        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-1'}>
            </div>
            <div className={classes.col + " " + 'col-xs-10'}>
                {props.peopleList.map((user) => <div key={user.id}>
                    <div className={classes.container}>
                        <div>
                            <img className={classes.avaImg} src={user.avaUrl} alt=""/>
                            <div>
                                {user.isFollowing ? <button className={classes.buttons + " " +  classes.unfollowButton} onClick={() => {
                                    props.unfollow(user.id)
                                }}> unfollow </button> : <button className={classes.buttons + " " +  classes.followButton} onClick={() => {
                                    props.follow(user.id)
                                }}> follow </button>}
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div>
                                <div className={classes.fullName}> {user.fullname}</div>
                                <div className={classes.status}>Status: {user.status}</div>
                            </div>
                            <div>
                                <div className={classes.city}>{user.location.city}  </div>
                                <div className={classes.country}>{user.location.country}  </div>
                            </div>
                        </div>
                    </div>

                </div>)}
                <div className={classes.col + " " + 'col-xs-1'}>
                </div>
            </div>
        </div>
    </div>
}

export default People