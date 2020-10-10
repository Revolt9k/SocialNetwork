import React from "react";
import classes from "../FormsControl/FormsControl.module.css"


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={classes.textarea_wrapper + " " + classes.error} >
            <div>
                <textarea  {...input} {...props} />
            </div>
            <div className={classes.errortext}>
                "error"
            </div>
        </div>

    )
}