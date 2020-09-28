import {connect} from "react-redux";
import {
    changePage,
    follow,
    setPeopleCount,
    setUsers,
    toggleFetch,
    unfollow,
    toggleFollowing, getUsersThunkCreator,
} from "../../Redux/peopleReducer";
import React from "react";
import People from "./people";
import {usersAPI} from "../../API/api";

class PeopleContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator()
        // this.props.toggleFetch(false)
        // usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
        //     this.props.toggleFetch(true)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalPeopleCount(data.totalCount)
        // });
    }

    onPageChanged = (page) => {
        this.props.toggleFetch(false)
        this.props.changePage(page)
        usersAPI.getUsers(this.props.pageSize, page).then(data => {
            this.props.toggleFetch(true)
            this.props.setUsers(data.items)
        });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <People totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       changePage={this.onPageChanged}
                       peopleList={this.props.peopleList}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFetching={this.props.isFetching}
                       toggleFetch={this.props.toggleFetch}
                       toggleFollowing={this.props.toggleFollowing}
                       followingInProgress={this.props.followingInProgress}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        peopleList: state.peoplePage.peopleList,
        pageSize: state.peoplePage.pageSize,
        totalUserCount: state.peoplePage.totalUserCount,
        currentPage: state.peoplePage.currentPage,
        isFetching: state.peoplePage.isFetching,
        followingInProgress: state.peoplePage.followingInProgress
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setusers: (newUserList) => {
//             dispatch(setUsersAC(newUserList))
//         },
//         changePage: (page) => {
//             dispatch(changePageAC(page))
//         },
//         setTotalPeopleCount: (totalUserCount) => {
//             dispatch(setPeopleCountAC(totalUserCount))
//         },
//         toggleFetch: (isFetching) => {
//             dispatch(toggleFetchAC(isFetching))
//         }
//     }
// }
//


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    toggleFetch,
    setTotalPeopleCount: setPeopleCount,
    toggleFollowing,
    getUsersThunkCreator
})(PeopleContainer)