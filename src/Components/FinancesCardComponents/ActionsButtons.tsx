import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

const ActionsButtons = () => {
  return (
    <>
      {/*Buttons*/}
      <View
        style={tw.style('flex  mb-68 flex-row justify-between items-center')}
      >
        <View style={tw.style('flex items-center ml-5')}>
          <FontAwesome6 name="circle-arrow-up" size={48} color="#6d00a1" />
          <Text style={tw.style('text-white')}>Ingreso</Text>
        </View>

        <View style={tw.style('flex flex-col items-center')}>
          <AntDesign
            style={tw.style('mt-4')}
            name="clockcircle"
            size={48}
            color="#6d00a1"
          />
          <Text style={tw.style('text-white')}>Programar</Text>
          <Text style={tw.style('text-white')}>Ingreso/Gasto</Text>
        </View>

        <View style={tw.style('flex items-center mr-5')}>
          <FontAwesome6 name="circle-arrow-down" size={48} color="#6d00a1" />
          <Text style={tw.style('text-white')}>Gasto</Text>
        </View>
      </View>
    </>
  );
};

export default ActionsButtons;
