import {Field, Form} from "react-final-form";
import React from "react";
import classes from '../myPosts.module.css'

const MyPostForm = (props) => {


    const onSubmit = (values) => {
        props.addPost(values.post);
    }


    return <Form onSubmit={onSubmit}
                 render={({handleSubmit, form, submitting, pristine, values}) => (
                     <form onSubmit={handleSubmit}>
                         <div className={classes.textzone}>
                             <Field
                                 name="post"
                                 component="input"
                                 type="text"
                                 placeholder="Your message here"
                                 className={classes.textarea}
                             />
                             <button type="submit"
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