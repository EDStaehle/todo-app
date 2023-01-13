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
  const [signUpUserName, setSignUpUserName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [SignUpRole, setSignUpRole] = useState('');
  const { login, signUp } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(signUpUserName, signUpPassword, SignUpRole);
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

      <Card style={{ width: '80%', margin: 'auto' }}>
        <Card.Section>
          <Text>Login</Text>
          <Group position='apart'>
            <form onSubmit={handleSignUp}>
              <TextInput
                placeholder='Username'
                onChange={(e) => setSignUpUserName(e.target.value)}
              />
              <TextInput
                placeholder='Password'
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              <TextInput
                placeholder='Password'
                onChange={(e) => setSignUpRole(e.target.value)}
              />
              <Button type='submit'>Sign Up</Button>
            </form>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
};
export default Login;
