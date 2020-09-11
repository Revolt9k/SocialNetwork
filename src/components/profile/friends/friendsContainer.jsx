import React from "react";
import Friends from "./friends";
import StoreContext from "../../../storeContext";

const FriendsContainer = (props) => {

    return  (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    return <Friends friendsList={state.friends.friendsList}/>
                }
            }
        </StoreContext.Consumer>
    )




}


export default FriendsContainer