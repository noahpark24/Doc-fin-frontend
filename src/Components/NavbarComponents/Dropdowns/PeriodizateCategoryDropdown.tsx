import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
//Styles
import tw from 'twrnc';
import { View } from 'react-native';

interface SpendCategoryDropdownProps {
  setNewCategory: (
    value: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro'
  ) => void;
}

const PeriodizateCategoryDropdown = ({
  setNewCategory,
}: SpendCategoryDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<
    'Factura' | 'Salario' | 'Suscripcion' | 'Otro'
  >('Otro');

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
            setNewCategory(itemValue);
          }}
        >
          <Picker.Item label="Factura" value="Factura" />
          <Picker.Item label="Salario" value="Salario" />
          <Picker.Item label="Suscripción" value="Suscripción" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      </View>
    </>
  );
};

export default PeriodizateCategoryDropdown;
