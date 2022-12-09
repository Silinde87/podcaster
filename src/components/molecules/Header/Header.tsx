import { Colors } from 'theme/Colors';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import { HeaderIndicator } from './components';
import { HeaderWrapper } from './Header.styled';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ loading }) => {
  return (
    <HeaderWrapper>
      <Typography type={TypographyTypes.H2} color={Colors.blue400}>
        Podcaster
      </Typography>

      {loading && <HeaderIndicator />}
    </HeaderWrapper>
  );
};

export default Header;
