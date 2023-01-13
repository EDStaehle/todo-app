import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '../context/settings/setting';
import AuthProvider, { AuthContext } from '../context/Auth/index';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

describe('Context Providers', () => {
  test('Settings Context provides initial state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ itemsDisplayed, showComplete, sort }) => (
              <>
                <h3 data-testid="itemsDisplayed-test">test: {itemsDisplayed}</h3>
                <h3 data-testid="showComplete-test">test: {String(showComplete)}</h3>
                <h3 data-testid="sort-test">test: {sort}</h3>
              </>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const display = screen.getByTestId('itemsDisplayed-test');
    const hide = screen.getByTestId('showComplete-test');
    const sortBy = screen.getByTestId('sort-test');
    expect(display).toHaveTextContent('test:');
    expect(hide).toHaveTextContent('test: false');
    expect(sortBy).toHaveTextContent('test: difficulty');
  });
  test('Auth Context provides initial state', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ isLoggedIn, user, error }) => (
              <>
                <h3 data-testid="isLoggedIn-test">test: {String(isLoggedIn)}</h3>
                <h3 data-testid="user-test">test: {String(user)}</h3>
                <h3 data-testid="error-test">test: {String(error)}</h3>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const isLoggedIn = screen.getByTestId('isLoggedIn-test');
    const user = screen.getByTestId('user-test');
    const error = screen.getByTestId('error-test');
    expect(isLoggedIn).toHaveTextContent('test: false');
    expect(user).toHaveTextContent('test: [object Object]');
    expect(error).toHaveTextContent('test: null');
  });
});