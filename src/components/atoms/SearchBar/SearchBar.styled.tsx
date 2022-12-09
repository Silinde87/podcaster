import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const InputWrapper = styled.input`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  width: 300px;
  transition: outline 0.1s;
  font-size: 16px;
  color: ${Colors.gray900};
  outline: 1px solid ${Colors.gray800};
  &:focus {
    outline: 2px solid ${Colors.blue600};
  }
`;

export { InputWrapper };
