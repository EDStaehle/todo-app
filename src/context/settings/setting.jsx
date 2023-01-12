import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [details, setDetails] = useState('no details provided');
  const [difficulty, setDifficulty] = useState(3);
  const [name, setName] = useState('Anyone-no name provided');
  const [showComplete, setShowComplete] = useState(false);
  const [itemsDisplayed, setItemsDisplayed] = useState(3);
  const [item, setItem] = useState();
  const [sort, setSort] = useState('difficulty');
  const saveLocally = () => {
    localStorage.setItem(
      'todo',
      JSON.stringify({ itemsDisplayed, sort, showComplete }),
    );
  };
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if (storage) {
      console.log(storage);
      setShowComplete(storage.showComplete);
      setItemsDisplayed(storage.itemsDisplayed);
      setSort(storage.sort);
    }
  }, []);
  const values = {
    showComplete,
    setShowComplete,
    details,
    setDetails,
    difficulty,
    setDifficulty,
    name,
    itemsDisplayed,
    setItemsDisplayed,
    item,
    setItem,
    sort,
    setSort,
    saveLocally,
  };
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};
export default SettingsProvider;
