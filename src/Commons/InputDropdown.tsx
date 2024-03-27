import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//Styles
import tw from 'twrnc';

const InputDropdown = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <>
      <View
        style={tw.style('flex px-8 flex-row justify-center items-center mb-16')}
      >
        {/* Dropdown */}
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
    </>
  );
};

export default InputDropdown;
