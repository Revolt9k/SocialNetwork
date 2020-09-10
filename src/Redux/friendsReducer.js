let initialState = {
    friendsList : [
        {id: 1, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3333.jpg", isOnline: true},
        {id: 2, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg", isOnline: false},
        {id: 3, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar2217.jpg", isOnline: true},
        {id: 4, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1497.jpg", isOnline: true},
        {id: 5, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg", isOnline: false},
        {id: 6, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg", isOnline: true},
        {id: 7, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg", isOnline: true},
        {id: 8, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar2178.jpg", isOnline: false},
        {id: 9, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3251.jpg", isOnline: true},
        {id: 10, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3131.jpg", isOnline: false},
        {id: 11, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3295.jpg", isOnline: true},
        {id: 12, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1245.jpg", isOnline: true},
        {id: 13, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3395.jpg", isOnline: true},
        {id: 14, avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg", isOnline: false}
    ],
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }

}

export default friendsReducer