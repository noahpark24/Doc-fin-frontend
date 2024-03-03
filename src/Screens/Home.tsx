import { useEffect } from 'react';
import { ScrollView, BackHandler } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import FinancesCard from '../Components/FinancesCard';
import MovementsSection from '../Components/MovementsSection';
import Navbar from '../Components/Navbar';

const Home = () => {
  //Unable native back navigation of android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={tw.style(
        `flex items-center bg-[${colors.background}] justify-center h-full`
      )}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <FinancesCard />
      <MovementsSection />
      <Navbar />
    </ScrollView>
  );
};

Home.navigationOptions = () => ({
  gestureEnabled: false,
});

export default Home;
