import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../context/settings/setting';

const Header = () => {
  const { itemsDisplayed, item } = useContext(SettingsContext);
  const [incomplete, setIncomplete] = useState([]);
  let items = [];
  items.push(item);
  console.log(items);
  useEffect(() => {
    let incompleteCount = items.filter((item) => !item?.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do itemsDisplayed: ${incomplete}`;
    console.log(incomplete);
  }, [incomplete]);
  return <h1>{incomplete}</h1>;
};
export default Header;
