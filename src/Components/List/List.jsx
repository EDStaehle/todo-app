import { useContext, useState } from 'react';
import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../context/settings/setting';
const List = (props) => {
  const { list, toggleComplete, deleteItem } = props;
  let { itemsDisplayed, setItemsDisplayed } = useContext(SettingsContext);
  const [page, onChange] = useState(1);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = list.slice(startIndex, endIndex);
  // setItemsDisplayed(list);
  return (
    <>
      {pageList.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <button onClick={() => deleteItem(item.id)}>X</button>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
      <Pagination
        page={page}
        initialPage={1}
        onChange={onChange}
        total={Math.ceil(list.length / itemsDisplayed)}
      />
    </>
  );
};
export default List;
