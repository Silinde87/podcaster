import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${Colors.gray600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 16px;
`;

export { HeaderWrapper };
