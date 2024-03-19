import { Image, Text, TextInput, View } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import PrevNextButtons from '../Components/PrevNextButtons';
import Money from '../store/Money';
import Home from './Home';
import { useState } from 'react';

const SetSalary = () => {
  const [salaryInput, setSalaryInput] = useState<string>('');

  const handleSalaryInputChange = (text: string) => {
    setSalaryInput(text);
    const salaryValue = parseFloat(text);
    if (!isNaN(salaryValue)) {
      Money.updateAvailableMoney(salaryValue);
    }
  };

  return (
    <>
      {Money.alreadyLogged ? (
        <Home />
      ) : (
        <View
          style={tw.style(
            `flex items-center bg-[${colors.background}] justify-center h-full`
          )}
        >
          <Text
            style={tw.style(`px-8 text-${colors.text_ligth} text-2xl mb-12`)}
          >
            Coloque La Cantidad De Dinero Que Tiene Disponible
          </Text>

          <Image
            style={tw.style('mb-14 rounded-lg w-40 h-40 ')}
            source={require('../../assets/salary-pay-icon-5.png')}
          />

          <TextInput
            style={tw.style(
              'px-18 py-3 mt-4 mb-28 border border-[#3C0753] text-center text-xl text-white rounded'
            )}
            keyboardType="numeric"
            placeholder="$0000"
            placeholderTextColor="white"
            value={salaryInput}
            onChangeText={handleSalaryInputChange}
          />
          <PrevNextButtons prev={'Welcome'} next={'Home'} />
        </View>
      )}
    </>
  );
};

export default SetSalary;
