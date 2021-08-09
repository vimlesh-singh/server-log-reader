import List from './List'
import React from 'react';
import { render, screen } from '@testing-library/react';


const data = [{ name: '/about', count: 45 }, { name: '/home', count: 60 }];
test('renders list component', async () => {
  render(<List data={data} item ={'test'}/>);
  const inputElement = screen.getByTestId('list-component');
  expect(inputElement).toBeInTheDocument();
});
