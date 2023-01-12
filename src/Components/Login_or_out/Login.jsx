import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';
import {
  Slider,
  TextInput,
  Grid,
  Card,
  Text,
  NumberInput,
  Button,
  Popover,
  Group,
} from '@mantine/core';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);

    console.log('proof of life');
  };
  return (
    <>
      <Card style={{ width: '80%', margin: 'auto' }}>
        <Card.Section>
          <Text>Login</Text>
          <Group position='apart'>
            <form onSubmit={handleLogin}>
              <TextInput
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit'>Login</Button>
            </form>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
};
export default Login;
