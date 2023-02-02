import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png' alt='' />

        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
