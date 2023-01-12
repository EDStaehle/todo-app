import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Anchor, Group, Button } from '@mantine/core';
import useStyles from '../mantineStyles/mantineStyles';
import { AuthContext } from '../../context/Auth';
const NavbarApp = () => {
  let { isLoggedIn, login, logout } = useContext(AuthContext);
  const { classes } = useStyles();
  const linkStyle = {
    color: '#F8F9FA',
    textDecoration: 'none',
  };
  return (
    <>
      <Navbar
        className={classes.navbar}
        fixed={false}
        position={{ top: 0, left: 0 }}
        height={1}
        p='md'
      >
        <Group position='apart'>
          <Group>
            <Link
              style={linkStyle}
              className={classes.navbarLink}
              to='/'
              default
            >
              Home
            </Link>
            <Link
              style={linkStyle}
              className={classes.navbarLink}
              to='/settings'
            >
              Settings
            </Link>
          </Group>
          <Group>
            {isLoggedIn ? (
              <Button
                styles={(theme) => ({
                  root: {
                    backgroundColor: 'red',
                    color: theme.colors.gray[0],
                    border: 0,
                    height: 20,
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontSize: theme.fontSizes.xs,
                  },
                })}
                onClick={logout}
              >
                <Link style={linkStyle} to='/login'>
                  Logout
                </Link>
              </Button>
            ) : (
              <Button
                styles={(theme) => ({
                  root: {
                    backgroundColor: 'black',
                    height: 20,
                    paddingLeft: 5,
                    border: 0,
                    paddingRight: 5,
                    fontSize: theme.fontSizes.xs,
                  },
                })}
                onClick={login}
              >
                <Link style={linkStyle} to='/login'>
                  Login
                </Link>
              </Button>
            )}
          </Group>
        </Group>
      </Navbar>
    </>
  );
};
export default NavbarApp;
