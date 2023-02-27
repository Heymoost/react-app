import React from 'react';
import { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const activeteEditMode = () => {
    setEditMode(true);
  }

  const deactiveteEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span className={s.statusTittle} onDoubleClick={activeteEditMode}>{props.status || 'Status'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input className={s.statusInput} onChange={onStatusChange} onBlur={deactiveteEditMode} autoFocus={true} value={status} />
        </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;