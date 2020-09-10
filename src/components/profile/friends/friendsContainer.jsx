import React from "react";
import Friends from "./friends";

const FriendsContainer = (props) => {

    let state = props.store.getState()

    return <Friends friendsList={state.friends.friendsList}/>


}


export default FriendsContainer