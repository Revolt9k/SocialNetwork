import React, {useState} from "react";
import classes from './profileInfo.module.css';
import noava from "../../../assets/images/noava.jpg"
import Loader from "../../../assets/common/loader";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileInfoTable from "./ProfileInfoTable";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }
    const updateProfile = (profileData) => {
        props.setProfileInfo(profileData)

    }

    const onMainPhotoChange = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    if (!props.profile) {
        return <Loader className={classes.loader}/>
    }
    return <div>
        <div className={classes.imgWrapper}>
            <img className={classes.contentImg} src={props.profile.photos.large || noava} alt=""/>
        </div>
        <div>
            <div className={classes.row + " row"}>
                <div className={' col-xs-12'}>
                    {!props.isOwner ? <div className={classes.uploadPhoto}>
                        <div className={classes.uploadText}>Upload&nbsp;ava!</div>
                        <input onChange={onMainPhotoChange} type="file"/>
                    </div> : null}
                </div>
            </div>
            {!editMode ? <ProfileInfoTable profile={props.profile}
                                           status={props.status}
                                           updateStatus={props.updateStatus}
                                           activateEditMode={activateEditMode}/>
                : <ProfileInfoForm profile={props.profile}
                                   status={props.status}
                                   updateProfile={updateProfile}
                                   deactivateEditMode={deactivateEditMode}/>
            }
        </div>
    </div>


}


export default ProfileInfo