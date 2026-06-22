// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherAnchor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherAnchor/i);
    expect(titleElement).toBeInTheDocument();
});
