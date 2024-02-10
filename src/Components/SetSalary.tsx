import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
import { useState } from 'react';
//Utils
import useHandleNavigation from '../Utils/HandleNavigation';

const SetSalary = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleNavigate = useHandleNavigation();

  return (
    <>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full`
        )}
      >
        <Text style={tw.style(`px-8 text-${colors.text_ligth} text-2xl mb-12`)}>
          Coloque Su Tipo De Ingreso Y El Monto
        </Text>

        <Image
          style={tw.style('mb-24 rounded-lg w-40 h-40 ')}
          source={require('../../assets/salary-pay-icon-5.png')}
        />

        {/* Dropdown */}
        <View
          style={tw.style(
            'flex px-8 flex-row justify-center items-center mb-16'
          )}
        >
          <Picker
            selectedValue={selectedOption}
            style={tw.style(
              'text-white bg-[#3C0753] border border-red-600 rounded w-32'
            )}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
          >
            <Picker.Item label="Mensual" value="Mensual" />
            <Picker.Item label="Semanal" value="Semanal" />
            <Picker.Item label="Quincena" value="Quincena" />
            <Picker.Item label="Nada" value="Nada" />
          </Picker>

          {/* Input */}
          <TextInput
            style={tw.style(
              'flex-grow h-12 ml-2 border border-[#3C0753] text-center text-white rounded'
            )}
            keyboardType="numeric"
            placeholder="$0000"
            placeholderTextColor="white"
          />
        </View>
        {/*Buttons*/}
        <View style={tw.style(`flex w-80  flex-row justify-between `)}>
          <TouchableOpacity
            onPress={() => handleNavigate('Welcome')}
            style={tw.style(`p-4 bg-[${colors.button_bg}] `)}
          >
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Previo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled
            style={tw.style(`p-4 bg-[${colors.disabled_button}]`)}
          >
            <Text style={tw.style(`text-${colors.text_dark}`)}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SetSalary;
