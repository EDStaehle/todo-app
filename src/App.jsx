import React, { useEffect, useState, useContext } from 'react';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ToDo from './Components/ToDo/ToDo';
import Settings from './Components/settings';
import { SettingsContext } from './context/settings/setting';
import NavbarApp from './Components/Navbar/Navbar';
const App = () => {
  const [incomplete, setIncomplete] = useState();
  const { difficulty, name, itemsDisplayed } = useContext(SettingsContext);
  return (
    <>
      <NavbarApp />
      <Header incomplete={incomplete} />
      <Routes>
        <Route
          path={'/'}
          element={
            <ToDo incomplete={incomplete} setIncomplete={setIncomplete} />
          }
        />
        <Route path={'/settings'} element={<Settings />} />
      </Routes>
    </>
  );
};
export default App;
