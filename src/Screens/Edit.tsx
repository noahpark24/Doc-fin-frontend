import { View, Text, Image, TouchableOpacity } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';

const Edit: React.FC = () => {
  let availableBalance = 175000;
  return (
    <View>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full `
        )}
      >
        <View style={tw.style('flex flex-col ')}>
          <Text>Saldo disponible</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Edit;
