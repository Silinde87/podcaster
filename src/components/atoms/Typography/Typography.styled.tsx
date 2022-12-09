import styled from 'styled-components';
import { Weights, Sizes } from './Typography';
import { TypographyProps } from './Typography.types';

const Typographys = {
  H1: styled.h1<TypographyProps>`
    font-size: ${({ size }) => (size ? getFontSize(size) : getFontSize(Sizes.XL))};
    line-height: ${({ size }) => (size ? getFontHeight(size) : getFontHeight(Sizes.XL))};
    font-weight: ${({ weight }) =>
      weight ? getFontWeight(weight) : getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  H2: styled.h2<TypographyProps>`
    font-size: ${({ size }) => (size ? getFontSize(size) : getFontSize(Sizes.L))};
    line-height: ${({ size }) => (size ? getFontHeight(size) : getFontHeight(Sizes.L))};
    font-weight: ${({ weight }) =>
      weight ? getFontWeight(weight) : getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  H3: styled.h3<TypographyProps>`
    font-size: ${({ size }) => (size ? getFontSize(size) : getFontSize(Sizes.M))};
    line-height: ${({ size }) => (size ? getFontHeight(size) : getFontHeight(Sizes.M))};
    font-weight: ${({ weight }) =>
      weight ? getFontWeight(weight) : getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  P: styled.p<TypographyProps>`
    font-size: ${({ size }) => (size ? getFontSize(size) : getFontSize(Sizes.S))};
    line-height: ${({ size }) => (size ? getFontHeight(size) : getFontHeight(Sizes.S))};
    font-weight: ${({ weight }) =>
      weight ? getFontWeight(weight) : getFontWeight(Weights.REGULAR)};
    color: ${({ color }) => color};
  `,
  CAPTION: styled.p<TypographyProps>`
    font-size: ${({ size }) => (size ? getFontSize(size) : getFontSize(Sizes.XS))};
    line-height: ${({ size }) => (size ? getFontHeight(size) : getFontHeight(Sizes.XS))};
    font-weight: ${({ weight }) =>
      weight ? getFontWeight(weight) : getFontWeight(Weights.LIGHT)};
    color: ${({ color }) => color};
  `,
};

type TypographyOptions = {
  [key: string]: string;
};

const getFontWeight = (weight: string): string => {
  const fontWeights: TypographyOptions = {
    [Weights.LIGHT]: '300',
    [Weights.REGULAR]: '400',
    [Weights.SEMIBOLD]: '600',
  };
  return fontWeights[weight];
};

const getFontSize = (size: string): string => {
  const fontSizes: TypographyOptions = {
    [Sizes.XS]: '14px',
    [Sizes.S]: '18px',
    [Sizes.M]: '24px',
    [Sizes.L]: '32px',
    [Sizes.XL]: '40px',
  };
  return fontSizes[size];
};

const getFontHeight = (size: string): string => {
  const fontHeights: TypographyOptions = {
    [Sizes.XS]: '16px',
    [Sizes.S]: '20px',
    [Sizes.M]: '28px',
    [Sizes.L]: '36px',
    [Sizes.XL]: '42px',
  };
  return fontHeights[size];
};

export { Typographys };
