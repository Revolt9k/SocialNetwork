import {connect} from "react-redux";
import {
    follow,
    unfollow,
    changePage,
    followSuccess,
    unfollowSuccess,
    toggleFollowing,
    getUsers,
} from "../../Redux/peopleReducer";
import React from "react";
import People from "./people";
import {compose} from "redux";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgressStatus,
    getIsFetchingStatus,
    getPageSize,
    getPeople,
    getTotalUserCount
} from "../../selectors/peopleSelectors";

class PeopleContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.pageSize, this.props.currentPage)

    }

    onPageChanged = (page) => {

        this.props.getUsers(this.props.pageSize, page)
        this.props.changePage(page)

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
                       // toggleFollowing={this.props.toggleFollowing}
                       followingInProgress={this.props.followingInProgress}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        peopleList: getPeople(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingInProgressStatus(state),
    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow,    unfollow,    followSuccess,    unfollowSuccess,
    changePage,    toggleFollowing,    getUsers, })
)(PeopleContainer)