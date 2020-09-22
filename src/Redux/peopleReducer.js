const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = "setUsers";
const changePage = "changePage";
const setTotalPeopleCount = "setTotalPeopleCount"
const toggleFetch = "toggleFetch"

let initialState = {
    peopleList: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case  follow: {
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
        case unfollow : {
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

        case setUsers : {
            return {...state, peopleList: action.newUserList,}
        }

        case changePage : {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case setTotalPeopleCount : {
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

        case toggleFetch : {
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


        default : {
            return state;

        }
    }

}

export const followAC = (userId) => ({type: follow, userId})

export const unfollowAC = (userId) => ({type: unfollow, userId})

export const setUsersAC = (newUserList) => ({type: setUsers, newUserList})

export const changePageAC = (page) => ({type: changePage, page})

export const setPeopleCountAC = (peopleCount) => ({type: setTotalPeopleCount, peopleCount})

export const toggleFetchAC = (isFetching) => ({type: toggleFetch, isFetching})


export default peopleReducer