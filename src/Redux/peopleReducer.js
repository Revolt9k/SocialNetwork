import {usersAPI} from "../API/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = "setUsers";
const CHANGE_PAGE = "changePage";
const SET_TOTAL_PEOPLE_COUNT = "setTotalPeopleCount"
const TOGGLE_FETCH = "toggleFetch"
const TOGGLE_FOLLOWING = "toggleFollowing"

let initialState = {
    peopleList: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW: {
            return {
                ...state,
                peopleList: state.peopleList.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                peopleList: state.peopleList.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case SET_USERS : {
            return {...state, peopleList: action.newUserList,}
        }

        case CHANGE_PAGE : {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_PEOPLE_COUNT : {
            if (action.peopleCount > 200) {
                return {
                    ...state,
                    totalUserCount: 200
                }
            } else {
                return {
                    ...state,
                    totalUserCount: action.peopleCount

                }
            }

        }

        case TOGGLE_FETCH : {
            if (action.isFetching === true) {
                return {
                    ...state,
                    isFetching: false
                }
            } else if (action.isFetching === false) {
                return {
                    ...state,
                    isFetching: true
                }
            }
        }
        case TOGGLE_FOLLOWING : {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default : {
            return state;

        }
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (newUserList) => ({type: SET_USERS, newUserList})

export const changePage = (page) => ({type: CHANGE_PAGE, page})

export const setPeopleCount = (peopleCount) => ({type: SET_TOTAL_PEOPLE_COUNT, peopleCount})

export const toggleFetch = (isFetching) => ({type: TOGGLE_FETCH, isFetching})

export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId})

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleFetch(false))
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleFetch(true))
            dispatch(setUsers(data.items))
            dispatch(setPeopleCount(data.totalCount))
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
}

export default peopleReducer