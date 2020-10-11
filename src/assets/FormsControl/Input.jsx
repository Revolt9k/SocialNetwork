import React from "react";
import classes from "../FormsControl/FormsControl.module.css"


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.input_wrapper + " " + (hasError ? classes.error : "")} >
            <div>
                <input  {...input} {...props} className={classes.input} />
            </div>
            {hasError && <div className={classes.input_error_text}>
                {meta.error}
            </div> }
        </div>

    )
}

