import { render } from '@testing-library/react';
import React from 'react';

describe('LayoutMain', () => {
  it('renders without crash', () => {
    expect(() => {
      render(<LayoutMain />);
    }).not.toThrow();
  });
});
