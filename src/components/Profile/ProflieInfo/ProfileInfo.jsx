import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../img/avatar.png";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div className={s.item}>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='' />
      </div> */}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={s.userPhoto} alt="" />
        <div className={s.descriptionBlockUser}>
          <p className={s.aboutMe}>{props.profile.aboutMe}</p>
          <ul className={s.blockInfo}>
            <li>Name: {props.profile.fullName}</li>
            <li>Facebook: {props.profile.contacts.facebook}</li>
            <li>Website: {props.profile.contacts.website}</li>
            <li>VK: {props.profile.contacts.vk}</li>
            <li>Twitter: {props.profile.contacts.twitter}</li>
            <li>Instagram: {props.profile.contacts.instagram}</li>
            <li>YouTube: {props.profile.contacts.youtube}</li>
            <li>GitHub: {props.profile.contacts.github}</li>
            <li>MainLink: {props.profile.contacts.mainLink}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default ProfileInfo;