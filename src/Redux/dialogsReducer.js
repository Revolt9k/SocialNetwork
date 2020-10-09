const SEND_MESSAGE = 'sendMessage';

let initialState = {
    dialogsData: [
        {id: 1, name: "Konstantin", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
        {id: 2, name: "Anastasia", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
        {id: 3, name: "Anton", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
        {id: 4, name: "Vitaly", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
        {id: 5, name: "Valeria", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
    ],
    messagiesData: [
        {
            date: 1,
            id: 1,
            message: "Hi boyyy",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg",
            fromMe: true
        },
        {
            date: 2,
            id: 2,
            message: "Yo Bro. How is your React learning? ",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"
        },
        {
            date: 3,
            id: 3,
            message: "Yep",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg",
            fromMe: true
        },
        {
            date: 4,
            id: 4,
            message: "Still taking all your time? :)",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"
        },
        {
            date: 5,
            id: 5,
            message: "But now i can talk to you here :)",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg",
            fromMe: true
        }
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.message.length !== 0) {
                let sendedMessage = {
                    id: Date.now(),
                    message: action.message,
                    imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg",
                    fromMe: true
                }
                return {
                    ...state,
                    messagiesData: [...state.messagiesData, sendedMessage],
                }

            } else {
                return state
            }

        }

        default :
            return state;
    }

}
export const sendMessage = (message) => ({type: SEND_MESSAGE, message: message})

export default dialogsReducer