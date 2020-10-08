import classes from "./login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"}
                   name={"email"}
                   className={classes.login_input}
                   placeholder={"login"}/>
        </div>
        <div>
            <Field component={"input"}
                   name={"password"}
                   className={classes.pass_input}
                   placeholder={"Password"}/>
        </div>
        <div>
            <Field component={"input"}
                   name={"rememberMe"}
                   className={classes.remember_input}
                   type="checkbox"/> Remember me
        </div>
        <div>
            <button className={classes.login_button}>Login</button>
        </div>
    </form>

}



const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm