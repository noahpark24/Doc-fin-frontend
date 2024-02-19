import React from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import colors from '../stylesheets/colors';
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
    >
      <FinancesCard />
      <MovementsSection />
      <Navbar />
    </ScrollView>
  );
};

export default Home;
