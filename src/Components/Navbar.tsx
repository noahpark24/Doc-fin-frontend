import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//Icons
import { FontAwesome6, AntDesign, Entypo } from '@expo/vector-icons';
//Styles
import tw from 'twrnc';
//Modals
import IncomeModal from './NavbarComponents/NavModals/IncomeModal';
import SpendModal from './NavbarComponents/NavModals/SpendModal';
import EditionModal from './NavbarComponents/NavModals/EditionModal';
import SaveModal from './NavbarComponents/NavModals/SaveModal';

const Navbar = () => {
  const [showIncomeForm, setShowIncomeForm] = useState<boolean>(false);
  const [showSpendForm, setShowSpendForm] = useState<boolean>(false);
  const [showEditionForm, setShowEditionForm] = useState<boolean>(false);
  const [showSaveForm, setShowSaveForm] = useState<boolean>(false);

  return (
    <View
      style={tw`flex-row justify-between items-center bg-gray-200 p-2 absolute bottom-0 left-0 right-0`}
    >
      <TouchableOpacity
        style={tw`flex flex-col ml-4 items-center text-center`}
        onPress={() => setShowIncomeForm(true)}
      >
        <FontAwesome6 name="circle-arrow-up" size={30} color="#6d00a1" />
        <Text>Ingreso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowSpendForm(true)}
        style={tw`flex flex-col items-center text-center`}
      >
        <FontAwesome6 name="circle-arrow-down" size={30} color="#6d00a1" />
        <Text>Gasto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowSaveForm(true)}
        style={tw`flex flex-col items-center text-center`}
      >
        <Entypo name="save" size={30} color="#6d00a1" />
        <Text>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setShowEditionForm(true);
        }}
        style={tw`flex flex-col items-center mr-4 text-center`}
      >
        <AntDesign name="edit" size={30} color="#6d00a1" />
        <Text>Editar</Text>
      </TouchableOpacity>

      <IncomeModal
        visible={showIncomeForm}
        hideForm={() => setShowIncomeForm(false)}
      />
      <SpendModal
        visible={showSpendForm}
        hideForm={() => setShowSpendForm(false)}
      />

      <EditionModal
        visible={showEditionForm}
        hideForm={() => setShowEditionForm(false)}
      />

      <SaveModal
        visible={showSaveForm}
        hideForm={() => setShowSaveForm(false)}
      />
    </View>
  );
};

export default Navbar;
