import { render, screen } from '@testing-library/react';
import App from './App';
test('renders Header component', () => {

  render(<App />);
  const linkElement = screen.getByText(/Process Terminator/i);
  expect(linkElement).toBeInTheDocument();
});
