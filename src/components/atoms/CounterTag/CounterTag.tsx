import React from 'react';
import { Colors } from 'theme/Colors';
import Typography, { TypographyTypes } from '../Typography';
import { CounterTagWrapper } from './CounterTag.styled';
import { CounterTagProps } from './CounterTag.types';

const CounterTag: React.FC<CounterTagProps> = ({ count, style, dataTestId = 'counter-tag' }) => {
  return (
    <CounterTagWrapper style={style} data-testid={dataTestId}>
      <Typography color={Colors.white} type={TypographyTypes.H3}>
        {count}
      </Typography>
    </CounterTagWrapper>
  );
};

export default CounterTag;
