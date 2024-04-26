import { render, screen } from '@testing-library/react';
import App from './App';

test('First text message renders successfully', () => {
  render(<App />);
  const textElement = screen.getByText(/first test/i);
  expect(textElement).toBeInTheDocument();
});
