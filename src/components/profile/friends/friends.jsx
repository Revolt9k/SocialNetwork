import React from "react";
import classes from './friends.module.css';
import FriendItem from "./friendItem/friendItem"


const Friends = (props) => {

    let lastOnlineFriends = props.friendsList
        .filter(item => item.isOnline === true)
        .map((friend) => <FriendItem key={friend.id} avaUrl={friend.avaUrl} />)
        .splice(0,8)




    return <div>
        <h4 className={classes.onlinetext}>Friends Online</h4>
        <div className={classes.friendZoneLoL}>
            {lastOnlineFriends}

        </div>

    </div>




}


export default Friends