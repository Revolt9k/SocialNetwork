import React from "react";
import classes from './friends.module.css';
import FriendItem from "./friendItem/friendItem"


const Friends = (props) => {

    let filteredFriends = props.firends
        .map((friend) => <FriendItem avaUrl={friend.avaUrl} />)
        .splice(0,8)

    return <div>
        <h4 className={classes.onlinetext}>Friends Online</h4>
        <div className={classes.friendZoneLoL}>

            {filteredFriends}


        </div>

    </div>




}


export default Friends