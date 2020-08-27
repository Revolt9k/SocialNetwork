import {rerenderAllTree} from "../render";

let state = {
    dialogsPage : {
        dialogsData : [
            {id: 1, name: "Konstantin", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
            {id: 2, name: "Anastasia", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
            {id: 3, name: "Anton", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg"},
            {id: 4, name: "Vitaly", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
            {id: 5, name: "Valeria", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg"}
        ],
        messagiesData : [
            {id: 1, message: "Hi boyyy", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg", fromMe:true},
            {id: 2, message: "Yo Bro. How is your React learning? ", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2713.jpg"},
            {id: 3, message: "Yep", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg", fromMe:true},
            {id: 4, message: "Still taking all your time? :)", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
            {id: 5, message: "But now i can talk to you here :)", imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2826.jpg", fromMe:true}
        ]
    },
    profilePage : {
        postsData : [
            {id: 1, message: "how are you", author:'good boy', avaUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg"},
            {id: 2, message: "learning react",author:'You', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
            {id: 3, message: "what?", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3017.jpg"},
            {id: 4, message: "come on baby", author:'random boy', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"},
            {id: 5, message: "right now",author:'random girl', avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg"},
            {id: 6, message: "hey ho", author:'random boy',avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg"},
            {id: 7, message: "hey ho howdi ho", author:'random boy',avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1449.jpg"}
        ],
        newPostTextValue : ""
    },
    firends : [
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
    ]

}


export let addPost =  () => {
    let newPost = {
        id: "i",
        message: state.profilePage.newPostTextValue,
        author: "You",
        avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"

    };

    state.profilePage.postsData.unshift(newPost)
    changePost("")
    rerenderAllTree()

}

export let removePost = () => {

    state.profilePage.postsData.splice(0, 1)
    rerenderAllTree()
}

export let sendMessage = (sendMessage) => {
    let sendedMessage = {

        id: "i",
        message: sendMessage,
        imgUrl: "https://cs16planet.ru/steam-avatars/images/avatar2682.jpg",
        fromMe:true

    }

    state.dialogsPage.messagiesData.push(sendedMessage)
    rerenderAllTree()
}

export let changePost = (text) => {
    state.profilePage.newPostTextValue = text;
    rerenderAllTree()
}

export default state;