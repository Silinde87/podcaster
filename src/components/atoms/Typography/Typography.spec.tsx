import { render } from '@testing-library/react';
import { Colors } from 'theme/Colors';
import { TypographyTypes, TypographySizes, TypographyWeights } from '.';
import Typography from './Typography';

describe('Typography component', () => {
  it('should be rendered with default style, as P tag and "test" text', () => {
    const { getByText } = render(<Typography>test</Typography>);
    const textComponent = getByText(/test/);

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveStyle(`
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
        color: ${Colors.gray800};
    `);
  });

  it('should be rendered with custom html tag and custom color', () => {
    const { getByText } = render(
      <Typography type={TypographyTypes.H1} color={Colors.blue400}>
        test
      </Typography>,
    );
    const textComponent = getByText(/test/);
    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('H1');
    expect(textComponent).toHaveStyle(`
        font-size: 40px;
        line-height: 42px;
        font-weight: 600;
        color: ${Colors.blue400};
    `);
  });

  it('should be rendered with proper style according to size prop', () => {
    const { getByText } = render(<Typography size={TypographySizes.XS}>test</Typography>);
    const textComponent = getByText(/test/);
    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveStyle(`
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;
        color: ${Colors.gray800};
    `);
  });

  it('should be rendered with proper style according to weight prop', () => {
    const { getByText } = render(<Typography weight={TypographyWeights.LIGHT}>test</Typography>);
    const textComponent = getByText(/test/);
    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveStyle(`
        font-size: 18px;
        line-height: 20px;
        font-weight: 300;
        color: ${Colors.gray800};
    `);
  })
});
