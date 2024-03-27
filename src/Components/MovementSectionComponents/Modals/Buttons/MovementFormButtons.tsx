import { Text, TouchableOpacity, View } from 'react-native';
//Styles
import colors from '../../../../stylesheets/colors';
import tw from 'twrnc';

interface FormButtons {
  handleDelete: () => void;
  hideForm: () => void;
}

const MovementFormButtons = ({ handleDelete, hideForm }: FormButtons) => {
  return (
    <>
      {/*Buttons */}
      <View style={tw`flex-row justify-between mt-4 `}>
        <TouchableOpacity
          onPress={() => hideForm()}
          style={tw.style(`p-3 bg-[${colors.button_bg}]`)}
        >
          <Text style={tw.style(`text-${colors.text_ligth}`)}>Atras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDelete}
          style={tw.style(`p-3 bg-[${colors.button_bg}]`)}
        >
          <Text style={tw.style(`text-${colors.text_ligth}`)}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MovementFormButtons;
