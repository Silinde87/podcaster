import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const CounterTagWrapper = styled.div`
  background-color: ${Colors.blue600};
  width: fit-content;
  min-width: 52px;
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export { CounterTagWrapper };
