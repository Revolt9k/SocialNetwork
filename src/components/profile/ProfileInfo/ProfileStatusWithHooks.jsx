import React, {useState} from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return <div>
        {!editMode &&
        <div>
            <div onDoubleClick={activateMode} className={classes.status}> {props.status || "-----"}</div>
        </div>
        }
        {editMode &&
        <div>
            <input
                onBlur={deActivateMode}
                autoFocus={true}
                value={status}
                className={classes.input}
                onChange={onStatusChange}
            />
        </div>
        }
    </div>

}
export default ProfileStatusWithHooks