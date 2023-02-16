import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);


const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post message={p.message} likeCounts={p.likeCounts} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return <div className={s.content}>
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  </div>
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" placeholder="Enter your message" validate={[required, maxLength10]} type="text" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

export default MyPosts;