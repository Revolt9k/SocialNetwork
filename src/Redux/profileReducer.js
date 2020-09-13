const addPost = 'addPost';
const changePost = 'changePost';
const removePost = 'removePost';

let initialState = {
    postsData: [
        {
            id: 1,
            message: "how are you",
            author: 'good boy',
            avaUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg"
        },
        {
            id: 2,
            message: "learning react",
            author: 'You',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar568.jpg"
        },
        {
            id: 3,
            message: "what?",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3017.jpg"
        },
        {
            id: 4,
            message: "come on baby",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar497.jpg"
        },
        {
            id: 5,
            message: "right now",
            author: 'random girl',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar3141.jpg"
        },
        {
            id: 6,
            message: "hey ho",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar449.jpg"
        },
        {
            id: 7,
            message: "hey ho howdi ho",
            author: 'random boy',
            avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar1449.jpg"
        }
    ],
    newPostTextValue: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost :
            if (state.newPostTextValue != false) {
                let newPost = {
                    id: "i",
                    message: state.newPostTextValue,
                    author: "You",
                    avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar568.jpg"

                };
                return {
                    ...state,
                    postsData: [newPost, ...state.postsData],
                    newPostTextValue: "",
                }
            } else {
                alert("You must type some!")
                return state
            }
        case changePost : {
            return {
                ...state,
                newPostTextValue: action.text
            }
        }
        case removePost : {
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.splice(0, 1)
            return stateCopy;
        }
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})

export const onPostChangeActionCreator = (text) => ({type: changePost, text: text})

export const removePostActionCreator = () => ({type: removePost})

export default profileReducer