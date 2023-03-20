import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return <form className={s.descriptionBlock} onSubmit={handleSubmit}>
    <div className={s.blockAbout}>
      <b>About me</b>
      <ul className={s.blockInfo}>
        <li><b>Full name:</b> <Field placeholder={"Full name"} name={"fullName"} component={Input} /></li>
        <li><b>About me:</b><p className={s.aboutMe}><Field placeholder={"About me"} name={"aboutMe"} component={Textarea} /></p></li>
        <li><b>Looking for a job:</b><Field name={"lookingForAJob"} component={Input} type={"checkbox"} /></li>
        <li><b>My professional skills:</b><Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={Textarea} /></li>
      </ul>
    </div>
    <div>
      <b>Contacts</b> <div className={s.blockInfo}>{Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.blockContacts}>
          <b>{key}: <Field placeholder={key} name={"contacts." + key} component={Input} /></b>
        </div>
      })}</div>
    </div>
    <div><button>Save</button></div>
    {error && <div className={style.formSummaryError}>
        {error}
      </div>}
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm);

export default ProfileDataFormReduxForm;