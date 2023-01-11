import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../context/settings/setting';
import { Navbar } from '@mantine/core';
const Header = (props) => {
  const { incomplete } = props;
  return <h1>To Do List: {incomplete} items pending</h1>;
};
export default Header;
