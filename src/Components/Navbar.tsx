import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//Icons
import { FontAwesome6, AntDesign, FontAwesome } from '@expo/vector-icons';
//Styles
import tw from 'twrnc';
//Modals
import IncomeModal from './NavbarComponents/IncomeModal';
import SpendModal from './NavbarComponents/SpendModal';
import PeriodizationModal from './NavbarComponents/PeriodizationModal';

const Navbar = () => {
  const [showIncomeForm, setShowIncomeForm] = useState<boolean>(false);
  const [showSpendForm, setShowSpendForm] = useState<boolean>(false);
  const [showPeriodizateForm, setShowPeriodizateForm] =
    useState<boolean>(false);

  return (
    <View
      style={tw`flex-row justify-between items-center bg-gray-200 p-2 absolute bottom-0 left-0 right-0`}
    >
      <TouchableOpacity
        style={tw`flex flex-col ml-2 items-center`}
        onPress={() => setShowIncomeForm(true)}
      >
        <FontAwesome6 name="circle-arrow-up" size={37} color="#6d00a1" />
        <Text>Ingreso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowSpendForm(true)}
        style={tw`flex flex-col items-center`}
      >
        <FontAwesome6 name="circle-arrow-down" size={37} color="#6d00a1" />
        <Text>Gasto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowPeriodizateForm(true)}
        style={tw`flex flex-col items-center mr-2`}
      >
        <AntDesign name="clockcircle" size={37} color="#6d00a1" />
        <Text>Periodizar</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={tw`flex flex-col mr-2 items-center`}>
        <FontAwesome name="pencil-square" size={35} color="#6d00a1" />
        <Text>Editar</Text>
      </TouchableOpacity> */}

      <IncomeModal
        visible={showIncomeForm}
        hideForm={() => setShowIncomeForm(false)}
      />
      <SpendModal
        visible={showSpendForm}
        hideForm={() => setShowSpendForm(false)}
      />

      <PeriodizationModal
        visible={showPeriodizateForm}
        hideForm={() => setShowPeriodizateForm(false)}
      />
    </View>
  );
};

export default Navbar;
