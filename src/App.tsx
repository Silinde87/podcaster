import Typography, { TypographyTypes } from 'components/atoms/Typography';
import { Colors } from 'theme/Colors';

function App() {
  return (
    <div>
      <Typography type={TypographyTypes.H1} color={Colors.blue600}>
        Pocaster Home
      </Typography>
    </div>
  );
}

export default App;
