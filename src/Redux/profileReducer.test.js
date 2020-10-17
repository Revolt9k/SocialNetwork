import profileReducer, {addPost, removePost} from "./profileReducer";
import React from "react";

let state = {
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
}

test('length of posts should be incremented', () => {
    let action = addPost("some new post")
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(8);
});

test('length of posts should be decremented', () => {
    let action = removePost()
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(6);

});

test('message of new posts should be "some new post', () => {
    let action = addPost("some new post")
    let newState = profileReducer(state, action)

    expect(newState.postsData[0].message).toBe("some new post");
});

