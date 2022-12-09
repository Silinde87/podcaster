import React, { useState } from 'react';
import { InputWrapper } from './SearchBar.styled';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({
  dataTestId = 'searchbar-component',
  placeholder,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    onChange(event.currentTarget.value);
  };

  return (
    <InputWrapper
      data-testId={dataTestId}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      type="text"
    />
  );
};

export default SearchBar;
