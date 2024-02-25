import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
//Styles
import tw from 'twrnc';
import { View } from 'react-native';

interface SpendCategoryDropdownProps {
  updateType: (value: string) => void;
}

const PeriodizateTypeDropdown = ({
  updateType,
}: SpendCategoryDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <>
      <View style={tw.style('flex  flex-row justify-center items-center mb-6')}>
        {/* Dropdown */}
        <Picker
          selectedValue={selectedOption}
          style={tw.style(
            'text-white  bg-[#3C0753] border border-red-600 rounded w-52'
          )}
          onValueChange={(itemValue) => {
            setSelectedOption(itemValue);
            updateType(itemValue);
          }}
        >
          <Picker.Item label="Ingreso" value="Ingreso" />
          <Picker.Item label="Gasto" value="Gasto" />
        </Picker>
      </View>
    </>
  );
};

export default PeriodizateTypeDropdown;
