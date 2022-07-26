import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './app';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({results: [{name: 'PokeOne'}, {name: 'PokeTwo'}]}));
  }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('MSW test', async () => {
  render(<App />);

  let goButton = screen.getByTestId('go-button');
  fireEvent.click(goButton);

  let resultOne = await screen.findByText('PokeOne');
  let resultTwo = await screen.findByText('PokeTwo');

  expect(resultOne).toBeInTheDocument();
  expect(resultTwo).toBeInTheDocument();

});
