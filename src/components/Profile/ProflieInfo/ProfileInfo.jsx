import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../img/avatar.png";
import photoReload from "../../../img/reload.png";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }

  return (
    <div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div className={s.userBlock}>
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
        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}

      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div className={s.descriptionBlock}>
    <div className={s.blockAbout}>
      <b>About me</b>
      <ul className={s.blockInfo}>
        <li><b>Full name:</b> {profile.fullName}</li>
        <li><b>About me:</b> {profile.aboutMe}</li>
        <li><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</li>
        {profile.lookingForAJob &&
          <li><b>My professional skills:</b> {profile.lookingForAJobDescription}</li>}
      </ul>
    </div>
    <div>
      <b>Contacts</b> <div className={s.blockInfo}>{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}</div>
    </div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
  </div>
}

export const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.blockContacts}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;