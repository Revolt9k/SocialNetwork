import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, logoutThunkCreator,} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.authThunk()

    }

    render() {
        return <Header {...this.props} logout={this.props.logoutThunkCreator} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {authThunk, logoutThunkCreator})(HeaderContainer);