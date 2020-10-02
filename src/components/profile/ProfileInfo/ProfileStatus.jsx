import React from "react";
import classes from './ProfileStatus.module.css';


const ProfileStatus = (props) => {

    let statusRef = React.createRef()

    let onStatusChange = () => {
        let value = statusRef.current.value
        props.onStatusChange(value)
    }

    return <div>
        <div>
            <span className={classes.status}> {props.status}</span>
        </div>
        <div>
            <input onChange={onStatusChange} ref={statusRef} value={props.status} className={classes.input}/>
        </div>
    </div>
}

export default ProfileStatus