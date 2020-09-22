import People from "./people";
import {connect} from "react-redux";
import {changePageAC, followAC, setUsersAC, unfollowAC} from "../../Redux/peopleReducer";

let mapStateToProps = (state) => {
    return {
        peopleList: state.peoplePage.peopleList,
        pageSize: state.peoplePage.pageSize,
        totalUserCount: state.peoplePage.totalUserCount,
        currentPage: state.peoplePage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (newUserList) => {
            dispatch(setUsersAC(newUserList))
        },
        changePage: (page) => {
            dispatch(changePageAC(page))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(People)