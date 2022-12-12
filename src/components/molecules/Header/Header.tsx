import { Link } from 'react-router-dom';
import { Colors } from 'theme/Colors';
import { ROUTES } from 'utils/constants/routes.constants';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import { HeaderIndicator } from './components';
import { HeaderWrapper } from './Header.styled';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ loading }) => {
  return (
    <HeaderWrapper>
      <Link to={ROUTES.HOME}>
        <Typography type={TypographyTypes.H2} color={Colors.blue400}>
          Podcaster
        </Typography>
      </Link>

      {loading && <HeaderIndicator />}
    </HeaderWrapper>
  );
};

export default Header;
