import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign, FontAwesome6, FontAwesome } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View
      style={tw`flex-row justify-between items-center bg-gray-200 p-2 absolute bottom-0 left-0 right-0`}
    >
      <TouchableOpacity style={tw`flex flex-col ml-2 items-center`}>
        <FontAwesome6 name="circle-arrow-up" size={35} color="#6d00a1" />
        <Text>Ingreso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex flex-col items-center`}>
        <FontAwesome6 name="circle-arrow-down" size={35} color="#6d00a1" />
        <Text>Gasto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex flex-col items-center`}>
        <AntDesign name="clockcircle" size={35} color="#6d00a1" />
        <Text>Periodizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex flex-col mr-2 items-center`}>
        <FontAwesome name="pencil-square" size={35} color="#6d00a1" />
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
