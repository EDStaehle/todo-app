import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { Slider } from '@mantine/core';

import { v4 as uuid } from 'uuid';
import List from '../List/List.jsx';
import { SettingsContext } from '../../context/settings/setting.jsx';

const ToDo = () => {
  const { difficulty, setDifficulty, name, itemsDisplayed, setItem } =
    useContext(SettingsContext);
  const [defaultValue] = useState({
    difficulty: difficulty,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValue);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
    setItem([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  // useEffect(() => {
  //   let incompleteCount = list.filter((item) => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [list]);
  const MARKS = [
    { value: 0, label: '1' },
    { value: 25, label: '2' },
    { value: 50, label: '3' },
    { value: 75, label: '4' },
    { value: 100, label: '5' },
  ];
  return (
    <>
      <header data-testid='todo-header'>
        <h1 data-testid='todo-h1'>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name='text'
            type='text'
            placeholder='Item Details'
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name='assignee'
            type='text'
            placeholder='Assignee Name'
          />
        </label>

        <Slider
          defaultValue={defaultValue.difficulty}
          onChange={handleChange}
          min={1}
          max={5}
          step={1}
          marks={MARKS}
          styles={{ markLabel: { display: 'none' } }}
        />

        <label>
          <button type='submit'>Add Item</button>
        </label>
      </form>

      <List
        list={list}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
    </>
  );
};

export default ToDo;
