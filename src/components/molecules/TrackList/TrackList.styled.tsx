import styled from 'styled-components';
import { Colors } from 'theme/Colors';
import { TDProps } from './TrackList.types';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TH = styled.th`
  border-bottom: 2px solid ${Colors.gray700};
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const TD = styled.td<TDProps>`
  background-color: ${({ index }) => (index && index % 2 === 1 ? Colors.gray400 : Colors.white)};
  border-bottom: 1px solid ${Colors.gray700};
  padding-top: 12px;
  padding-bottom: 12px;
`;

export { TH, TD, Table };
