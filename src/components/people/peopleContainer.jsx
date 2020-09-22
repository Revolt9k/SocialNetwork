import {connect} from "react-redux";
import {
    changePage,
    follow,
    setPeopleCount,
    setUsers,
    toggleFetch,
    unfollow
} from "../../Redux/peopleReducer";
import React from "react";
import * as axios from "axios";
import People from "./people";

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleFetch(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleFetch(true)
            this.props.setUsers(response.data.items)
            this.props.setTotalPeopleCount(response.data.totalCount)
        });
    }

    onPageChanged = (page) => {
        this.props.toggleFetch(false)
        this.props.changePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.toggleFetch(true)
            this.props.setUsers(response.data.items)
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
})(PeopleContainer)