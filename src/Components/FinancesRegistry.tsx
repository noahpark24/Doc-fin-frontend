import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Components
import MonthlyRegisterCard from './NavbarComponents/MonthlyRegisterCard';

interface FinanceRegistry {
  onBack: () => void;
}

const FinancesRegistry = ({ onBack }: FinanceRegistry) => {
  return (
    <View style={tw`h-full`}>
      <ScrollView style={tw`bg-[#6d00a1] rounded-lg h-full`}>
        <MonthlyRegisterCard />
      </ScrollView>
      <TouchableOpacity
        onPress={onBack}
        style={tw`p-4 bg-violet-400 rounded-md`}
      >
        <Text style={tw`text-white text-center text-xl`}>Volver atrás</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinancesRegistry;
