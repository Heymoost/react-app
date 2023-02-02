import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return <div className={s.content}>
    <div className={s.item}>
      <img src='https://www.w3schools.com/w3images/avatar2.png' alt='' />
      {props.message}
      <div>
        <span>Like</span> {props.likeCounts}
      </div>
    </div>
  </div>
}

export default Post;