import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = (props) => {
  return <div className={styles.content}>
    <div className={styles.users}>
      {
        props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} key={u.id} />)
      }
    </div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
  </div>
}

export default Users;