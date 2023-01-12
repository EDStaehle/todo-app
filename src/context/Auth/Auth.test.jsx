import jwt_decode from 'jwt-decode';
import React from 'react';
import { AuthProvider, AuthContext } from './index';

describe('AuthProvider', () => {
  let wrapper, component;
  beforeEach(() => {
    wrapper = mount(
      <AuthProvider>
        <p>Child Component</p>
      </AuthProvider>,
    );
    component = wrapper.find(AuthProvider);
  });

  test('initial state', () => {
    expect(auth.isLoggedIn).toBe(false);
    expect(auth.user).toEqual({});
    expect(auth.error).toBe(null);
  });

  test('validate token', () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM';
    auth._validateToken(token);
    expect(auth.isLoggedIn).toBe(true);
    expect(auth.user).toEqual(jwt_decode(token));
    expect(auth.error).toBe(null);
  });

  test('invalid token', () => {
    const token = 'not.a.valid.token';
    auth._validateToken(token);
    expect(auth.isLoggedIn).toBe(false);
    expect(auth.user).toEqual({});
    expect(auth.error).toBeTruthy();
  });

  test('can', () => {
    auth.user = { capabilities: ['create', 'update', 'read', 'delete'] };
    expect(auth.can('create')).toBe(true);
    expect(auth.can('update')).toBe(true);
    expect(auth.can('read')).toBe(true);
    expect(auth.can('delete')).toBe(true);
    expect(auth.can('invalid')).toBe(false);
  });
});
