import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCounts: 0 },
    { id: 2, message: "It's my first post", likeCounts: 23 }
  ]
}

test('lenght of post should be incremented', () => {
  let action = addPostActionCreator('test');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  let action = addPostActionCreator('test');

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("test");
});

test('after deleting length og message', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldtt be decrement if id is incorrect', () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
