import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
import FinancesCard from '../Components/FinancesCard';

const Home = () => {
  return (
    <>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full`
        )}
      >
        <FinancesCard />
      </View>
    </>
  );
};

export default Home;
