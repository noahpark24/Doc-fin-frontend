import { Text, View } from 'react-native';
import tw from 'twrnc';
//Styles
import colors from '../stylesheets/colors';

const SetSalary = () => {
  return (
    <>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full`
        )}
      >
        <Text>Lo Lograste , estas en la siguiente pagina</Text>
      </View>
    </>
  );
};

export default SetSalary;
