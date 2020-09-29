import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, setAuthUserData,} from "../../Redux/AuthReducer";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authThunk()
        // authAPI.auth().then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login} = data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // });
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, authThunk})(HeaderContainer);