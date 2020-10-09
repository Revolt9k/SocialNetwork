import classes from "./login.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => {
            return (<div className={classes.row + ' row'}>
                    <div className='col-xs-1'>
                    </div>
                    <div className={classes.form + ' col-xs-10'}>
                        <div>
                            <h1>Login</h1>
                            <form onSubmit={handleSubmit}>
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
                        </div>
                    </div>
                    <div className='col-xs-1'>
                    </div>
                </div>
            )
        }}
    />

}


export default LoginForm