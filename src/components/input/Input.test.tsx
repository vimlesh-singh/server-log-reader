import Input from './Input';
import { render, screen } from '@testing-library/react';

test('renders Input component', async () => {
  render(<Input type='file' onChange={() => {}} />);
  const inputElement = screen.getByTestId('form-input');
  expect(inputElement).toBeInTheDocument();
});
