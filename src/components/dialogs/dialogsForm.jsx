import {Field, Form} from "react-final-form";
import classes from "./dialogs.module.css";
import React from "react";



const DialogsForm = (props) => {

    const onSubmit = (values) => {
        props.SendMesage(values.message);
    }


    return <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div className={classes.textzone}>
                    <Field
                        name="message"
                        component="input"
                        type="text"
                        placeholder="Your message here"
                        className={classes.textarea}

                    />
                    <button type="submit"
                            disabled={submitting || pristine}
                            className={classes.sendButton}
                            >
                        Send
                    </button>
                </div>
            </form>
        )}
    />
}

export default DialogsForm