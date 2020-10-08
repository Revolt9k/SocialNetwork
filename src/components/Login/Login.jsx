import React from "react";
import classes from './login.module.css'
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return <div className={classes.row + ' row'}>
        <div className='col-xs-1'>
        </div>
        <div className={classes.form + ' col-xs-10'}>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
        <div className='col-xs-1'>
        </div>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator}) (Login)


