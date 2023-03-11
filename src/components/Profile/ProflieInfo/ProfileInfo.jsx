import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../img/avatar.png";
import photoReload from "../../../img/reload.png";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div className={s.descriptionBlock}>
        <div className={s.userPhotoBlock}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={s.userPhoto} alt="" />
          <div className={s.uploadInput}>{props.isOwner &&
            <form method="post" enctype="multipart/form-data">
              <label className={s.inputBlock}>
                <input type={"file"} onChange={onMainPhotoSelected} name="file" accept="image/png, image/jpeg" className={s.inputFile} />
                <span><img src={photoReload} className={s.imgReload} alt="" /></span>
                <div className={s.userPhotoHover}></div>
              </label>
            </form>
          }
          </div>
        </div>
        <div className={s.blockAbout}>
          <b>About me</b>
          <ul className={s.blockInfo}>
            {props.profile.aboutMe &&
              <li><p className={s.aboutMe}>{props.profile.aboutMe}</p></li>}
            <li><b>Name:</b> {props.profile.fullName}</li>
            {props.profile.contacts.facebook &&
              <li><b>Full name:</b> {props.profile.fullName}</li>}
            <li><b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}</li>
            {props.profile.lookingForAJob &&
              <li><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</li>}
          </ul>
        </div>
        <div className={s.blockContacts}>
          <b>Contacts</b>
          <ul className={s.blockInfo}>
            {props.profile.contacts.facebook &&
              <li><b>Facebook:</b> {props.profile.contacts.facebook}</li>}
            {props.profile.contacts.website &&
              <li><b>Website:</b> {props.profile.contacts.website}</li>}
            {props.profile.contacts.vk &&
              <li><b>VK:</b> {props.profile.contacts.vk}</li>}
            {props.profile.contacts.twitter &&
              <li><b>Twitter:</b> {props.profile.contacts.twitter}</li>}
            {props.profile.contacts.instagram &&
              <li><b>Instagram:</b> {props.profile.contacts.instagram}</li>}
            {props.profile.contacts.youtube &&
              <li><b>YouTube:</b> {props.profile.contacts.youtube}</li>}
            {props.profile.contacts.github &&
              <li><b>GitHub:</b> {props.profile.contacts.github}</li>}
            {props.profile.contacts.mainLink &&
              <li><b>MainLink:</b> {props.profile.contacts.mainLink}</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default ProfileInfo;