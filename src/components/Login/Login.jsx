import React from "react";
import classes from './login.module.css'
import LoginReduxForm from "./LoginForm";
import {authAPI} from "../../API/api";


const Login = (props) => {

    const onSubmit = (formData) => {
        authAPI.login(formData.email, formData.password, formData.rememberMe);


        console.log(authAPI.login(formData.email, formData.password, formData.rememberMe));
    }


    return <div className={classes.row + ' row'}>
        <div className='col-xs-1'>
        </div>
        <div className={classes.form + ' col-xs-10'}>
            <div>
                <h1>Login</h1>
                <LoginReduxForm props={props} onSubmit={onSubmit}/>
            </div>
        </div>
        <div className='col-xs-1'>
        </div>
    </div>
}


export default Login


