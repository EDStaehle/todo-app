import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings/setting';
import { IconSettings } from '@tabler/icons';
import useStyles from '../mantineStyles/mantineStyles';
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Switch,
  NumberInput,
  TextInput,
} from '@mantine/core';
import { ScrollRestoration } from 'react-router-dom';
const Settings = () => {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally();
  };
  const {
    showComplete,
    setShowComplete,
    difficulty,
    setDifficulty,
    itemsDisplayed,
    setItemsDisplayed,
    item,
    setItem,
    sort,
    setSort,
    saveLocally,
  } = useContext(SettingsContext);
  const { classes } = useStyles();
  return (
    <>
      <div>
        <h1 className={classes.settingsHeader}>
          <IconSettings />
          Manage Settings
        </h1>
        <Grid style={{ width: '80%', margin: 'auto' }}>
          <Grid.Col xs={12} sm={6}>
            <Card withBorder p='sm'>
              <Card.Section>
                <Text>Updated Settings</Text>
                <form onSubmit={handleSubmit}>
                  <Switch
                    label='Show completed Todos'
                    checked={showComplete}
                    onChange={(event) =>
                      setShowComplete(event.currentTarget.checked)
                    }
                  />
                  <NumberInput
                    placeholder={itemsDisplayed}
                    label='Items per page'
                    onChange={(value) => setItemsDisplayed(value)}
                  />
                  <TextInput
                    mb='sm'
                    placeholder={sort}
                    label='Sort Keyword'
                    onChange={(value) => setSort(value)}
                  />
                  <Button type='submit'>Show new settings</Button>
                </form>
              </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <Card withBorder>
              <Card.Section>
                <Text>Updated Settings</Text>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};
export default Settings;
