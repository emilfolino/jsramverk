import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/tic-tac-toe/i);
  expect(linkElement).toBeInTheDocument();
});

test('click button and see value changed', async () => {
  render(<App />);

  const button = screen.getByTestId('0');
  fireEvent.click(button);
  expect(button).toHaveTextContent("X");

  fireEvent.click(button);
  expect(button).toHaveTextContent("X");

  const button2 = screen.getByTestId('1');
  fireEvent.click(button2);
  expect(button2).toHaveTextContent("O");

  const button5 = screen.getByTestId('4');
  fireEvent.click(button5);

  const button6 = screen.getByTestId('5');
  fireEvent.click(button6);

  const button9 = screen.getByTestId('8');
  fireEvent.click(button9);

  const winnerText = screen.getByText('Winner: X');
  expect(winnerText).toBeInTheDocument();
});
