import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderConteiner from './components/Header/HeaderContainer';
import Login from './components/Login/login';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderConteiner />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/' element={<ProfileContainer  />} />
            <Route path='/profile/:userId' element={<ProfileContainer  />} />
            <Route path='/dialogs/' element={<DialogsContainer />} />
            <Route path='/users/' element={<UsersContainer />} />
            <Route path='/login/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
