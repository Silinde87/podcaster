import { Colors } from 'theme/Colors';
import { Typographys } from './Typography.styled';
import { TypographyProps } from './Typography.types';

export enum Sizes {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
}

export enum Weights {
  LIGHT = 'LIGHT',
  REGULAR = 'REGULAR',
  SEMIBOLD = 'SEMIBOLD',
}

export enum Types {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  P = 'P',
  CAPTION = 'CAPTION',
}

const Typography: React.FC<TypographyProps> = props => {
  const {
    children,
    type = Types.P,
    size = null,
    weight = null,
    color = Colors.gray800,
    dataTestId = 'typography-component',
    style,
    ...otherProps
  } = props;
  const Text = Typographys[type];
  return (
    <Text
      data-testid={dataTestId}
      type={type}
      size={size}
      weight={weight}
      color={color}
      style={style}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
