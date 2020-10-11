import {Field, Form} from "react-final-form";
import React from "react";
import classes from '../myPosts.module.css'
import {composeValidators, maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../../assets/FormsControl/Textarea";

const MyPostForm = (props) => {


    const onSubmit = (values) => {
            props.addPost(values.post);
            values.post = ""
    }

    return <Form onSubmit={onSubmit}
                 render={({handleSubmit, form, submitting, pristine, values}) => (
                     <form onSubmit={handleSubmit}>
                         <div className={classes.textzone}>

                             <Field
                                 name="post"
                                 component={Textarea}
                                 type="text"
                                 placeholder="Your post here"
                                 className={classes.textarea}
                                 validate={composeValidators(required, maxLengthCreator(100))}
                                 initialValue={""}
                             />
                             <button
                                    type={"submit"}
                                     disabled={submitting || pristine}
                                     className={classes.button + " " + classes.buttonAdd}>
                                 Send
                             </button>
                             <button type={"reset"}
                                     onClick={props.removeLastPost}
                                     className={classes.button + " " +  classes.buttonRemove}>
                             Remove Last post
                         </button>
                         </div>
                     </form>
                 )}
    />
}



export default MyPostForm