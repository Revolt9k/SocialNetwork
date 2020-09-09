const sendMessage = 'sendMessage';
const changeMessage = 'changeMessage';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case sendMessage:
            let sendedMessage = {

                id: "i",
                message: state.newMessageTextValue,
                imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg",
                fromMe:true

            }
            state.messagiesData.push(sendedMessage)
            state.newMessageTextValue = "";
            return state;
        case changeMessage :
            state.newMessageTextValue = action.text;
            return state;
        default :
            return state;
    }

}
export const sendMessageActionCreator = () => ( {type: sendMessage} )

export const onMessageChangeActionCreator = (text) =>  ( {type: changeMessage, text:text} )

export default dialogsReducer