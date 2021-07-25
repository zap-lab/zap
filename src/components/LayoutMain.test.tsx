import * as React from 'react';
import { render } from '@testing-library/react';
import LayoutMain from 'components/LayoutMain';
import 'jest';

describe('LayoutMain', () => {
  it('renders without crash', () => {
    expect(() => {
      render(<LayoutMain />);
    }).not.toThrow();
  });
});
