import { render } from '@testing-library/react';
import { Colors } from 'theme/Colors';
import CounterTag from './CounterTag';

describe('CounterTag component', () => {
  it('should be rendered with proper style', () => {
    const { getByTestId } = render(<CounterTag count={1} />);

    const counter = getByTestId('counter-tag');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveStyle(`
        background-color: ${Colors.blue600};
        padding: 2px 4px;
        border-radius: 8px;
    `);
  });
});
