import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {


  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  // for (let i = 1; i <= pagesCount; i += 1) {
  //   pages.push(i);
  // }

  // let slicedPages;
  // let curPage = props.currentPage;
  // if (curPage - 3 < 0) {
  //   slicedPages = pages.slice(0, 5);
  // } else {
  //   slicedPages = pages.slice(curPage - 3, curPage + 2);
  // }

  return <div>
    <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
    {
      props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} key={u.id} />)
    }
  </div>
}

export default Users;