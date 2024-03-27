import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
//Styles
import tw from 'twrnc';
import { View } from 'react-native';

interface SpendCategoryDropdownProps {
  setNewType: (value: 'Ingreso' | 'Gasto') => void;
}

const PeriodizateTypeDropdown = ({
  setNewType,
}: SpendCategoryDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<'Ingreso' | 'Gasto'>(
    'Gasto'
  );

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
            setNewType(itemValue);
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
