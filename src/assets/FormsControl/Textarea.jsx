import React from "react";
import classes from "../FormsControl/FormsControl.module.css"


export const Textarea = ({input, meta, ...props}) => {

const hasError = meta.touched && meta.error;

    return (
        <div className={classes.textarea_wrapper + " " + (hasError ? classes.error : "")} >
            <div>
                <textarea  {...input} {...props} />
            </div>
            {hasError && <div className={classes.errortext}>
                {meta.error}
            </div> }
        </div>

    )
}

