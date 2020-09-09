const addPost = 'addPost';
const changePost = 'changePost';
const removePost = 'removePost';

const profileReducer = (state, action) => {
        switch (action.type) {
            case addPost :
                let newPost = {
                    id: "i",
                    message: state.newPostTextValue,
                    author: "You",
                    avaUrl: "https://cs16planet.ru/steam-avatars/images/avatar568.jpg"

                };
                state.postsData.unshift(newPost);
                state.newPostTextValue = "";
                return state;
            case changePost :
                state.newPostTextValue = action.text;
                return state;
            case removePost :
                state.postsData.splice(0, 1)
                return state;
            default :
                return state;
        }
}

export const addPostActionCreator = () => ( {type: addPost} )

export const onPostChangeActionCreator = (text) =>  ( {type: changePost, text: text} )

export const removePostActionCreator = () => ({type: removePost})

export default profileReducer