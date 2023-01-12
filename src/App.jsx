import React, { useEffect, useState, useContext } from 'react';
import Login from '../src/Components/Login_or_out/Login';
import { Routes, Route } from 'react-router-dom';
import ToDo from './Components/ToDo/ToDo';
import Settings from './Components/Settings/settings';
import { SettingsContext } from './context/settings/setting';
import NavbarApp from './Components/Navbar/Navbar';
import Auth from './Components/Login_or_out/Auth';
import useStyles from './Components/mantineStyles/mantineStyles';
import './app.scss';
const App = () => {
  const [incomplete, setIncomplete] = useState();
  const { difficulty, name, itemsDisplayed } = useContext(SettingsContext);

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
