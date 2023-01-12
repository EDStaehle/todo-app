import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import {
  Slider,
  TextInput,
  Grid,
  Card,
  Text,
  NumberInput,
  Button,
  Popover,
} from '@mantine/core';

import { v4 as uuid } from 'uuid';
import List from '../List/List.jsx';
import { SettingsContext } from '../../context/settings/setting.jsx';
import useStyles from '../mantineStyles/mantineStyles.js';
import Auth from '../Login_or_out/Auth.jsx';
import { When } from 'react-if';
import { AuthContext } from '../../context/Auth/index.jsx';

const ToDo = (props) => {
  const { classes } = useStyles();
  const { difficulty, name, itemsDisplayed, setItem, sort } =
    useContext(SettingsContext);
  const { user } = useContext(AuthContext);
  const [defaultValue] = useState({
    difficulty: difficulty,
  });
  const [list, setList] = useState([]);
  const { incomplete, setIncomplete } = props;
  const { handleChange, handleSubmit } = useForm(addItem, defaultValue);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
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

  useEffect(() => {
    setIncomplete(() => {
      let incompleteCount = list.filter((item) => !item.complete).length;
      return incompleteCount;
    });
  }, [list]);
  const MARKS = [
    { value: 0, label: '1' },
    { value: 25, label: '2' },
    { value: 50, label: '3' },
    { value: 75, label: '4' },
    { value: 100, label: '5' },
  ];
  return (
    <>
      <h1 className={classes.homeHeader}>
        To Do List: {incomplete} items pending
      </h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p='sm'>
            <Card.Section>
              <Text>Add To Do Item</Text>
              <form onSubmit={handleSubmit}>
                <TextInput
                  name='details'
                  placeholder='Item Details'
                  onChange={handleChange}
                  label='details'
                />
                <TextInput
                  name='assignee'
                  placeholder='Assignee Name'
                  onChange={handleChange}
                  label='Assigned to'
                />
                <Slider
                  defaultValue={defaultValue.difficulty}
                  onChange={handleChange}
                  min={1}
                  max={5}
                  step={1}
                  marks={MARKS}
                  styles={{ markLabel: { display: 'none' } }}
                />
                {user.capabilities.includes('create') ? (
                  <Button type='submit'>Add Item</Button>
                ) : (
                  <Popover width={200} position='bottom' withArrow shadow='md'>
                    <Popover.Target>
                      <Button>Add Item</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <Text size='sm'>
                        Attention user you do not have the access to create.
                      </Text>
                    </Popover.Dropdown>
                  </Popover>
                )}
              </form>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <List
            list={list}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;
