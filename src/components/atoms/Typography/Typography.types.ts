import { Types, Weights, Sizes } from './Typography';

export type TypographyProps = {
  dataTestId?: string;
  type?: Types;
  weight?: Weights | null;
  size?: Sizes | null;
  color?: string;
  children?: React.ReactNode;
  style?: object;
};
