import  { profileReducer, addPostActionCreator } from "./profile-reducer";

test('lenght of post should be incremented', () => {
  let action = addPostActionCreator('kamasutra');

  let state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCounts: 0 },
      { id: 2, message: "It's my first post", likeCounts: 23 }
    ]
  }

  let newState = profileReducer(state, action);

  expect(newState.posts.length === (3)).toBe(3);
});
