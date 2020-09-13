const sendMessage = 'sendMessage';
const changeMessage = 'changeMessage';

let initialState = {
    dialogsData: [
        {id: 1, name: "Konstantin", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
        {id: 2, name: "Anastasia", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
        {id: 3, name: "Anton", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
        {id: 4, name: "Vitaly", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
        {id: 5, name: "Valeria", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
    ],
    messagiesData: [
        {id: 1, message: "Hi boyyy", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg", fromMe: true},
        {
            id: 2,
            message: "Yo Bro. How is your React learning? ",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"
        },
        {id: 3, message: "Yep", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg", fromMe: true},
        {
            id: 4,
            message: "Still taking all your time? :)",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"
        },
        {
            id: 5,
            message: "But now i can talk to you here :)",
            imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg",
            fromMe: true
        }
    ],
    newMessageTextValue: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case sendMessage: {
            if (state.newMessageTextValue != false) {
                let sendedMessage = {
                    id: "i",
                    message: state.newMessageTextValue,
                    imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg",
                    fromMe: true
                }
                return {
                    ...state,
                    messagiesData: [...state.messagiesData, sendedMessage],
                    newMessageTextValue: ""
                }
            } else {
                let isSure = window.confirm("Are you sure you want to send an empty message?")
                if (isSure === true) {
                    let sendedMessage = {
                        id: "i",
                        message: state.newMessageTextValue,
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

        }
        case changeMessage : {
            return {
                ...state,
                newMessageTextValue: action.text,
            }

        }
        default :
            return state;
    }

}
export const sendMessageActionCreator = () => ({type: sendMessage})

export const onMessageChangeActionCreator = (text) => ({type: changeMessage, text: text})

export default dialogsReducer