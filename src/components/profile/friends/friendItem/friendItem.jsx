import React from "react";
import classes from './friendItem.module.css';


const FriendItem = (props) => {


    return (
        <div className='col-xs-3'>

                <img className={classes.img} src={props.avaUrl} alt=""/>
        </div>

    )
}


export default FriendItem