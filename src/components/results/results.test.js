import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from '../form/index'
import Results from './index'

describe ('Results Tests', () => {
  test('returns results', () => {
    render(<Form />);
    render(<Results />);
    let button = screen.getByTestId('submit-form')
    let results = screen.getByTestId('results')
    fireEvent.click(button);
    
    expect(results).toBeInTheDocument();
  })
})