import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';
import logo from'../../img/logo192.png';

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} alt='' />

        <div className={s.loginBlock}>
          {props.isAuth
          ? <div className={s.loginName}>{props.login} <button className={s.loginBtn} onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
