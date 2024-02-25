import { Image, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import PrevNextButtons from '../Components/PrevNextButtons';
import InputDropdown from '../Components/InputDropdown';

const SetSalary = () => {
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

        <InputDropdown />
        <PrevNextButtons prev={'Welcome'} next={'Home'} />
      </View>
    </>
  );
};

export default SetSalary;
