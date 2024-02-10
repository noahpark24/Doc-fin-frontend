import { View, Text, TouchableOpacity, Image } from 'react-native';
//Utils
import useHandleNavigation from '../Utils/HandleNavigation';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';

const Welcome: React.FC = () => {
  const handleNavigate = useHandleNavigation();
  return (
    <>
      <View
        style={tw.style(
          `flex items-center bg-[${colors.background}] justify-center h-full `
        )}
      >
        <Text style={tw.style(`pb-8 mb-4 text-${colors.text_ligth} text-3xl`)}>
          Bienvenido/a A DocFin !
        </Text>

        <Image
          style={tw.style('mb-8 rounded-full')}
          source={require('../../assets/doc-fin-icono-1.png')}
        />

        <Text
          style={tw.style(
            `mb-16 px-8 text-${colors.text_ligth}  w-full text-xl`
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
            <Text style={tw.style(`text-${colors.text_gray}`)}>Previo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleNavigate('SetSalary')}
            style={tw.style(`p-4 bg-[${colors.button_bg}]`)}
          >
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;
