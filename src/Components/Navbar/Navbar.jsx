import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Anchor, Group } from '@mantine/core';
const NavbarApp = () => {
  return (
    <>
      <Navbar fixed={false} position={{ top: 0, left: 0 }} height={1} p='xs'>
        <Navbar.Section>
          <Group position='apart'>
            <Group>
              <Anchor href='/'>Home</Anchor>
              <Anchor href='/settings'>Settings</Anchor>
            </Group>
            <Group>
              <Anchor href='/'>logout</Anchor>
            </Group>
          </Group>
        </Navbar.Section>
      </Navbar>
    </>
  );
};
export default NavbarApp;
