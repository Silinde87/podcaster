import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should allow to type any character', () => {
    const { getByTestId } = render(<SearchBar placeholder="" onChange={() => {}} />);
    const text = 'abcABC123@';

    const searchbar = getByTestId('searchbar-component') as HTMLInputElement;

    expect(searchbar).toBeInTheDocument();
    expect(searchbar.value).toBe('');

    fireEvent.change(searchbar, { target: { value: text } });
    expect(searchbar.value).toBe(text);
  });

  it('should trigger onChange function on change text', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<SearchBar placeholder="" onChange={onChange} />);
    const searchbar = getByTestId('searchbar-component') as HTMLInputElement;
    fireEvent.change(searchbar, { target: { value: 'text' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('text')
  });
});
