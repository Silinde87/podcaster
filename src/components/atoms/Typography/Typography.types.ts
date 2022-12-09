import { Types, Weights, Sizes } from './Typography';

export type TypographyProps = {
  type?: Types;
  weight?: Weights | null;
  size?: Sizes | null;
  color?: string;
  children?: React.ReactNode;
  style?: object;
};
