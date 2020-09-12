const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = "setUsers";

let initialState = {
    peopleList: [
        // {
        //     id: 1,
        //     fullname: "Aleksandr",
        //     location: {city: "Moscow", country: "Russia"},
        //     status: "Hello there",
        //     isFollowing: true,
        //     avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
        // },
        // {
        //     id: 2,
        //     fullname: "Nikolay",
        //     location: {city: "Omsk", country: "Russia"},
        //     status: "I'm boss",
        //     isFollowing: false,
        //     avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
        // },
        // {
        //     id: 3,
        //     fullname: "Masha",
        //     location: {city: "Novosibirsk", country: "Russia"},
        //     status: "Looking for love",
        //     isFollowing: true,
        //     avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg",
        // },
    ],
}

const peopleReducer = (state = initialState, action) => {
    debugger
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