import React, { useState } from 'react';
import Login from '../src/Components/Login_or_out/Login';
import { Routes, Route } from 'react-router-dom';
import ToDo from './Components/ToDo/ToDo';
import Settings from './Components/Settings/settings';

import NavbarApp from './Components/Navbar/Navbar';
import Auth from './Components/Login_or_out/Auth';

import './app.scss';
const App = () => {
  const [incomplete, setIncomplete] = useState();

  return (
    <>
      <NavbarApp />
      {/* <Login /> */}
      <Routes>
        <Route
          path={'/'}
          element={
            <Auth capability='read'>
              <ToDo incomplete={incomplete} setIncomplete={setIncomplete} />
            </Auth>
          }
        />
        <Route
          path={'/settings'}
          element={
            <Auth capability='read'>
              <Settings />
            </Auth>
          }
        />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
