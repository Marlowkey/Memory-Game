import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('contains the Card component', () => {
    const { getByText } = render(<App />);
    // Assuming there's some text in the Card component that can be selected
    // Adjust the query to match the text in your Card component
    const cardText = getByText(/Memory Game/i);
    expect(cardText).toBeInTheDocument();
  });
});

