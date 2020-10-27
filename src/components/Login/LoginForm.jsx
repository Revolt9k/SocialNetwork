import classes from "./login.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators";
import {Input} from "../../assets/FormsControl/Input";

const LoginForm = (props) => {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
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
                                    <Field component={Input}
                                           name={"email"}
                                           className={classes.login_input}
                                           placeholder={"login"}
                                           validate={required}
                                           autoComplete="current-login"
                                    />
                                </div>
                                <div>
                                    <Field component={Input}
                                           name={"password"}
                                           className={classes.pass_input}
                                           placeholder={"Password"}
                                           type={"password"}
                                           validate={required}
                                           autoComplete="current-password"
                                    />

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
                            {(props.captcha) && <div>
                                <div>
                                    <Field component={Input}
                                           name={"captcha"}
                                           className={classes.pass_input}
                                           placeholder={"captcha"}
                                           type={"text"}
                                           validate={required}
                                           autoComplete="current-captcha"
                                    />

                                </div>
                                <div className={classes.captcha}><img src={props.captcha} alt=""/></div>
                            </div>
                            }
                            <div className={classes.advice}>
                                <h3>For test you can use:</h3>
                                <div>
                                    Email: <b>Lexxxlexus@mail.ru</b>
                                    <br/>
                                    Password: <b>testtest</b>
                                </div>

                            </div>

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