import Typography, { TypographyTypes } from 'components/atoms/Typography';
import HomeCard from 'components/molecules/Cards/HomeCard';
import Header from 'components/molecules/Header';

function App() {
  return (
    <div style={{ paddingLeft: 20 }}>
      <Header loading={true} />
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
