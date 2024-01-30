import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
//Styles
import colors from '../stylesheets/colors';

const Welcome = () => {
  return (
    <>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full `
        )}
      >
        <Text style={tw.style(`pb-8 mb-32 text-${colors.text_ligth} text-3xl`)}>
          Bienvenido/a A DocFin !
        </Text>
        <Text
          style={tw.style(
            `pb-8 pl-8 pr-8 text-${colors.text_ligth} mb-20 w-full text-xl`
          )}
        >
          Aqui Podra registar sus gastos y sus ingresos para llevar un correcto
          control sobre sus finanzas personales y optimizar sus gastos :D
        </Text>

        {/*Buttons */}
        <View style={tw.style(`flex w-80  flex-row justify-between `)}>
          <TouchableOpacity
            disabled
            style={tw.style(`p-4 bg-[${colors.disabled_button}] `)}
          >
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Previo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw.style(`p-4 bg-[${colors.button_bg}]`)}>
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;
