import React from 'react';
import { ScrollView } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import FinancesCard from '../Components/FinancesCard';
import MovementsSection from '../Components/MovementsSection';
import Navbar from '../Components/Navbar';

const Home = () => {
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

export default Home;
