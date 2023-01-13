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
import axios from 'axios';

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

  async function addItem(item) {
    item.complete = false;

    try {
      if (item.text) {
        const response = await axios.post(
          'https://api-js401.herokuapp.com/api/v1/todo',
          item,
        );
        setList([...list, response.data]);
        setItem([...list, response.data]);
      } else {
        console.warn('missing text');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteItem(itemId) {
    let that = list.filter((item) => item._id !== itemId);

    try {
      await axios.delete(
        `https://api-js401.herokuapp.com/api/v1/todo/${itemId}`,
      );
      setList(list.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error(error);
    }
  }

  async function toggleComplete(id) {
    try {
      let item = list.find((item) => item._id === id);
      item.complete = !item.complete;
      const response = await axios.put(
        `https://api-js401.herokuapp.com/api/v1/todo/${id}`,
        item,
      );
      console.log(response.data.complete);
      const items = list.map((item) => {
        if (item._id === id) {
          item.complete = response.data.complete;
        }
        return item;
      });
      setList(items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setIncomplete(() => {
      let incompleteCount = list.filter((item) => !item.complete).length;
      return incompleteCount;
    });
  }, [list]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://api-js401.herokuapp.com/api/v1/todo',
        );
        console.log(response.data.results);
        setList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
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
                  name='text'
                  placeholder='Item text'
                  onChange={handleChange}
                  label='text'
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
