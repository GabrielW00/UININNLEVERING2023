import { render, screen } from '@testing-library/react';    //test biblioteket
import App from './App';
            //render app    //app test 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
