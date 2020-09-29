import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk,} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.authThunk()

    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {authThunk})(HeaderContainer);