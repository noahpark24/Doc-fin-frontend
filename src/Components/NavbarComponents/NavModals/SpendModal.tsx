import { useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Components
import SpendCategoryDropdown from '../Dropdowns/SpendCategoryDropdown';
import FormButtons from '../ModalFormButtons.tsx/FormButtons';
//Utils
import GetActualDate from '../../../Utils/GetActualDate';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
import SpendInterface from '../../../Interfaces/SpendsInterface';
//States
import Movements from '../../../store/Movements';
//Utils
import FormatMoneyValue from '../../../Utils/FormatMoneyValue';
import NameValidation from '../../../Utils/NameValidation';

const SpendModal = ({ visible, hideForm }: ModalForm) => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<
    'Factura' | 'Mercado' | 'Kiosco' | 'Compra' | 'Otro'
  >('Kiosco');
  const [quantity, setQuantity] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const date = GetActualDate();

  const addNewSpend = () => {
    let newSpend: SpendInterface = {
      name: name,
      amount: Number(amount),
      quantity: Number(quantity),
      category: category,
      date: date,
    };
    if (NameValidation(newSpend.name)) {
      Movements.addSpend(newSpend);
      hideForm();
      setName('');
      setCategory('Kiosco');
      setQuantity('');
      setAmount('');
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const updateCategory = (
    value: 'Factura' | 'Mercado' | 'Kiosco' | 'Compra' | 'Otro'
  ) => {
    setCategory(value);
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-10 rounded-lg w-75`}>
            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Nombre del gasto
            </Text>
            <TextInput
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
              onChangeText={(text) => {
                if (text !== null) setName(text);
              }}
              value={name}
              placeholder=""
              maxLength={16}
            />
            <Text style={tw`font-bold text-center text-lg mb-2`}>Monto</Text>
            <TextInput
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
              onChangeText={setAmount}
              value={FormatMoneyValue(amount)}
              placeholder="$000"
              keyboardType="numeric"
              maxLength={10}
            />

            {category !== 'Factura' && (
              <>
                <Text style={tw`font-bold text-center text-lg mb-2`}>
                  Cantidad
                </Text>
                <TextInput
                  style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
                  onChangeText={setQuantity}
                  value={quantity}
                  placeholder="cantidad comprada"
                  keyboardType="numeric"
                />
              </>
            )}

            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Categoria
            </Text>

            {/*Dropdown*/}
            <SpendCategoryDropdown updateCategory={updateCategory} />

            {showErrorMessage && (
              <Text style={tw`text-red-500 text-xl text-center mb-2`}>
                Debe Ingresar Un Nombre
              </Text>
            )}

            {/*Buttons */}
            <FormButtons
              hideForm={() => hideForm()}
              handleSave={() => addNewSpend()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SpendModal;
