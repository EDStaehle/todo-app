import React, { useContext } from 'react';
import Header from './Components/Header/Header';

import ToDo from './Components/ToDo/ToDo';
import { SettingsContext } from './context/settings/setting';

const App = () => {
  const { difficulty, name, itemsDisplayed } = useContext(SettingsContext);
  return (
    <>
      <Header />
      <ToDo />
    </>
  );
};
export default App;
