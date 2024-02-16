import { Text, TouchableOpacity, View } from 'react-native';
//Utils
import useHandleNavigation from '../Utils/HandleNavigation';
//Styles
import tw from 'twrnc';
import colors from '../stylesheets/colors';

interface PrevNextButtonsProps {
  prev: string | null;
  next: string | null;
}

const PrevNextButtons = ({ prev, next }: PrevNextButtonsProps) => {
  const handleNavigate = useHandleNavigation();

  return (
    <>
      <View style={tw.style(`flex w-80  flex-row justify-between `)}>
        {prev === null ? (
          <TouchableOpacity
            disabled
            style={tw.style(`p-4 bg-[${colors.disabled_button}] `)}
          >
            <Text style={tw.style(`text-${colors.text_gray}`)}>Previo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleNavigate(`${prev}`)}
            style={tw.style(`p-4 bg-[${colors.button_bg}]`)}
          >
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Previo</Text>
          </TouchableOpacity>
        )}

        {next !== null ? (
          <TouchableOpacity
            onPress={() => handleNavigate(`${next}`)}
            style={tw.style(`p-4 bg-[${colors.button_bg}]`)}
          >
            <Text style={tw.style(`text-${colors.text_ligth}`)}>Siguiente</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled
            style={tw.style(`p-4 bg-[${colors.disabled_button}] `)}
          >
            <Text style={tw.style(`text-${colors.text_gray}`)}>Siguiente</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default PrevNextButtons;
