import { screen, render } from '@testing-library/react';
import List from '../Components/List/List.jsx'
import '@testing-library/jest-dom';
import SettingsProvider, { SettingsContext } from '../context/settings/setting';
import AuthProvider from '../context/Auth/index';

const toggleComplete = jest.fn();
jest.unmock('axios')

describe('List', () => {
  const items = [
    { id: 1, text: 'item 1', assignee: 'jhon', difficulty: 'laundry', complete: false },
    { id: 2, text: 'item 2', assignee: 'jimy', difficulty: 'dishes', complete: false },
    { id: 3, text: 'item 3', assignee: 'charles', difficulty: 'mow yard', complete: false },
    { id: 4, text: 'item 4', assignee: 'dine', difficulty: 'Easy', complete: false },
    { id: 5, text: 'item 5', assignee: 'bobby', difficulty: 'Medium', complete: true },
    { id: 6, text: 'item 6', assignee: 'wiggles', difficulty: 'take a shower(peeyew)', complete: false },
  ];

  test('renders the data correctly as expected', () => {

    render(
      <SettingsProvider>
        <AuthProvider>
          <List items={items} toggleComplete={toggleComplete} />
        </AuthProvider>
      </SettingsProvider>);
    const renderedItems = screen.getAllByTestId('list-item');
    expect(renderedItems).toHaveLength(3);
  });

});