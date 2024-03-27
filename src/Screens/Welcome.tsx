import { View, Text, Image } from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';
//Components
import PrevNextButtons from '../Commons/PrevNextButtons';
import Money from '../store/Money';
import Home from './Home';

const Welcome: React.FC = () => {
  return (
    <>
      {Money.alreadyLogged ? (
        <Home />
      ) : (
        <View
          style={tw.style(
            `flex items-center bg-[${colors.background}] justify-center h-full `
          )}
        >
          <Text
            style={tw.style(`pb-8 mb-4 text-${colors.text_ligth} text-3xl`)}
          >
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
            Aqui Podra registar sus gastos y sus ingresos para llevar un
            correcto control sobre sus finanzas personales y optimizar sus
            gastos :D
          </Text>

          {/*Buttons */}
          <PrevNextButtons prev={null} next={'SetSalary'} />
        </View>
      )}
    </>
  );
};

export default Welcome;
