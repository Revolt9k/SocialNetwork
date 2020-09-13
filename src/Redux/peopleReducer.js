const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = "setUsers";

let initialState = {
    peopleList: [ ],
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case  follow: {
            return {
                ...state,
                peopleList: state.peopleList.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, isFollowing: true}
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
                        return {...user, isFollowing: false}
                    }
                    return user
                })
            }
        }

        case setUsers : {
            return {...state, peopleList: [...state.peopleList, ...action.newUserList], }
        }
        default :
            return state;
    }
}

export const followAC = (userId) => ({type: follow, userId})

export const unfollowAC = (userId) => ({type: unfollow, userId})

export const setUsersAC = (newUserList) => ({type: setUsers, newUserList})


export default peopleReducer