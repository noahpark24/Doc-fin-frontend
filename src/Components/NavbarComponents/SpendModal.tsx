import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
//Styles
import colors from '../../stylesheets/colors';
import tw from 'twrnc';
//Components
import SpendCategoryDropdown from './Dropdowns/SpendCategoryDropdown';
//Utils
import GetActualDate from '../../Utils/GetActualDate';

interface ModalForm {
  visible: boolean;
  hideForm: () => void;
}

const SpendModal = ({ visible, hideForm }: ModalForm) => {
  const [nombre, setNombre] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [monto, setMonto] = useState<string>('');
  const date = GetActualDate();

  const handleSave = () => {
    console.log(
      `Nombre: ${nombre}, Monto: ${monto} , Categoria: ${category} , Cantidad: ${quantity} , Fecha: ${date} `
    );
    hideForm();
  };

  const updateCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-10 rounded-lg`}>
            <Text style={tw`font-bold text-lg mb-2`}>Nombre del gasto</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
              onChangeText={setNombre}
              value={nombre}
              placeholder=""
            />
            <Text style={tw`font-bold text-lg mb-2`}>Monto</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
              onChangeText={setMonto}
              value={monto}
              placeholder="$000"
              keyboardType="numeric"
            />

            {category !== 'Factura' && (
              <>
                <Text style={tw`font-bold text-lg mb-2`}>Cantidad</Text>
                <TextInput
                  style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
                  onChangeText={setQuantity}
                  value={quantity}
                  placeholder="cantidad comprada"
                  keyboardType="numeric"
                />
              </>
            )}

            <Text style={tw`font-bold text-lg mb-2`}>Categoria</Text>

            {/*Dropdown*/}
            <SpendCategoryDropdown updateCategory={updateCategory} />

            {/*Buttons */}
            <View style={tw`flex-row justify-between mt-4 `}>
              <TouchableOpacity
                onPress={() => hideForm()}
                style={tw.style(`p-2 bg-[${colors.button_bg}]`)}
              >
                <Text style={tw.style(`text-${colors.text_ligth}`)}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSave}
                style={tw.style(`p-2 bg-[${colors.button_bg}]`)}
              >
                <Text style={tw.style(`text-${colors.text_ligth}`)}>
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SpendModal;
