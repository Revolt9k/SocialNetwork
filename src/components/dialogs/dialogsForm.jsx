import {Field, Form} from "react-final-form";
import classes from "./dialogs.module.css";
import React from "react";
import {Textarea} from "../../assets/FormsControl/Textarea";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators";



const DialogsForm = (props) => {


    const onSubmit = (values) => {
        if(values.message) {
            props.SendMesage(values.message);
        }
        clean(values)
    }

    const clean = (values) => {
        values.message = ""
    }

    return <Form onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div className={classes.textzone}>
                    <Field
                        name="message"
                        component={Textarea}
                        type="text"
                        placeholder="Your message here"
                        className={classes.textarea}
                        validate={composeValidators(required, maxLengthCreator(40))}
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