import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../img/avatar.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {

  return <div >
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt={''} />
        </NavLink>
      </div>
      <span>
        <div className={styles.userText}>{user.name}</div>
        {/* <div className={styles.userText}>{user.status}</div> */}
      </span>
      <span>
        {/* <div className={styles.userText}>{'user.location.country'}</div>
        <div className={styles.userText}>{'user.location.city'}</div> */}
      </span>
    </span>
    <span>
      <div>
        {user.followed
          ? <button className={styles.btnFollowed} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
          : <button className={styles.btnFollowed} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>}
      </div>
    </span>
  </div>
}

export default User;