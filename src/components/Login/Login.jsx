import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/AuthReducer";
import LoginForm from "./LoginForm";



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator}) (LoginForm)


