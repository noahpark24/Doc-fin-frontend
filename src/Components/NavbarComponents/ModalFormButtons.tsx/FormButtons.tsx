import { Text, TouchableOpacity, View } from 'react-native';
//Styles
import colors from '../../../stylesheets/colors';
import tw from 'twrnc';

interface FormButtons {
  handleSave: () => void;
  hideForm: () => void;
}

const FormButtons = ({ handleSave, hideForm }: FormButtons) => {
  return (
    <>
      {/*Buttons */}
      <View style={tw`flex-row justify-between mt-4 `}>
        <TouchableOpacity
          onPress={() => hideForm()}
          style={tw.style(`p-3 bg-[${colors.button_bg}]`)}
        >
          <Text style={tw.style(`text-${colors.text_ligth}`)}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSave}
          style={tw.style(`p-3 bg-[${colors.button_bg}]`)}
        >
          <Text style={tw.style(`text-${colors.text_ligth}`)}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FormButtons;
