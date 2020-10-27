import {Field, Form} from "react-final-form";
import classes from "./profileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React from "react";
import ProfileInfoElement from "./ProfileInfoElement";

const ProfileInfoForm = (props) => {

    const onSubmit = (formData) => {
        props.updateProfile(formData)
        props.deactivateEditMode()
    }

    return <div>
        <Form
            onSubmit={onSubmit}
            initialValues={{
                fullName: props.profile.fullName,
                AboutMe: props.profile.aboutMe,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                Vk: props.profile.contacts.vk,
                Github: props.profile.contacts.github,
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div>

                        <ProfileInfoElement name={"Status:"} whatToShow={
                            <ProfileStatusWithHooks status={props.status}
                                                    updateStatus={props.updateStatus}/>}/>
                        <ProfileInfoElement name={"Name:"} whatToShow={
                            <Field
                                name="fullName"
                                component="input"
                                type="text"
                                placeholder="fullName"
                            />}/>
                        <ProfileInfoElement name={"About Me:"} whatToShow={
                            <Field
                                name="AboutMe"
                                component="input"
                                type="text"
                                placeholder="About Me"
                            />}/>
                        <ProfileInfoElement name={"Looking for Job:"} whatToShow={
                            <Field
                                name="lookingForAJobDescription"
                                component="input"
                                type="text"
                                placeholder="lookingForAJobDescription"
                            />}/>
                        <ProfileInfoElement name={"Vk link:"} whatToShow={
                            <Field
                                name="Vk"
                                component="input"
                                type="text"
                                placeholder="VK link"
                            />}/>
                        <ProfileInfoElement name={"GitHub link:"} whatToShow={
                            <Field
                                name="Github"
                                component="input"
                                type="text"
                                placeholder="VK link"
                            />}/>
                    </div>
                    <div>
                        {!props.isOwner && <ProfileInfoElement
                            name={<button className={classes.button + " " + classes.buttonRemove}
                                          onClick={() => props.deactivateEditMode()}>Cancel edit mode</button>}
                            whatToShow={<button className={classes.button + " " + classes.buttonAdd}
                                                type={"submit"}>Save changes!</button>}/>

                        }
                    </div>
                </form>
            )}
        />
    </div>
}

export default ProfileInfoForm