import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [details, setDetails] = useState('no details provided');
  const [difficulty, setDifficulty] = useState(3);
  const [name, setName] = useState('Anyone-no name provided');
  const [incomplete, setIncomplete] = useState(0);
  const [itemsDisplayed, setItemsDisplayed] = useState(3);
  const [item, setItem] = useState();

  const values = {
    incomplete,
    setIncomplete,
    details,
    setDetails,
    difficulty,
    setDifficulty,
    name,
    itemsDisplayed,
    setItemsDisplayed,
    item,
    setItem,
  };
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};
export default SettingsProvider;
