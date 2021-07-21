import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';

test('App should upon submitting the form will result in data being rendered in the output area',async () => {
  render(<App />);
 
const fire = screen.getAllByTestId('resultData');
console.log(fire);
const resultData = await waitFor(() => screen.getByTestId('resultData'))
// console.log(resultData.value)});

expect(resultData).toHaveTextContent('fake thing 1')
});