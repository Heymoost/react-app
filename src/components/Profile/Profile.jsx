import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProflieInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div >
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;