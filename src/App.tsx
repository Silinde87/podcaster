import Typography, { TypographyTypes } from 'components/atoms/Typography';
import HomeCard from 'components/molecules/Cards/HomeCard';
import { Colors } from 'theme/Colors';

function App() {
  return (
    <div style={{ paddingLeft: 20 }}>
      <Typography type={TypographyTypes.H1} color={Colors.blue600}>
        Pocaster Home
      </Typography>
      <HomeCard
        imageUrl="https://wallpaperaccess.com/full/317501.jpg"
        title="All songs considered"
        author="NPR"
        onClick={() => console.log('test')}
      />
    </div>
  );
}

export default App;
