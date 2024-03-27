import { useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Utils
import GetActualDate from '../../../Utils/DateUtils/GetActualDate';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
import IncomeInterface from '../../../Interfaces/IncomesInterface';
//States
import Movements from '../../../store/Movements';
//Components
import FormButtons from '../ModalFormButtons.tsx/FormButtons';
//Utils
import FormatMoneyValue from '../../../Utils/FormatMoneyValue';
import NameValidation from '../../../Utils/NameValidation';

const IncomeModal = ({ visible, hideForm }: ModalForm) => {
  const [name, setName] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [amountInput, setAmountInput] = useState<string>('');
  const [formatedAmount, setFormatedAmount] = useState<string>('');
  const date = GetActualDate();

  const handleAmountChange = (text: string) => {
    setAmountInput(text);

    setFormatedAmount(FormatMoneyValue(text));
  };

  const addNewIncome = () => {
    const newIncome: IncomeInterface = {
      name: name,
      amount: Number(amountInput.replace('.', '')),
      date: date,
    };

    if (NameValidation(newIncome.name)) {
      Movements.addIncome(newIncome);
      hideForm();
      setName('');
      setAmountInput('');
      setFormatedAmount('');
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={[tw`flex-1 justify-center items-center bg-black bg-opacity-50`]}
      >
        <View style={[tw`bg-white p-10 rounded-lg w-75`]}>
          <Text style={tw`font-bold text-center text-lg mb-2`}>
            Nombre del ingreso
          </Text>
          <TextInput
            style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder=""
            maxLength={16}
          />

          <Text style={tw`font-bold text-center text-lg mb-2`}>Monto</Text>
          <TextInput
            style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            onChangeText={handleAmountChange}
            value={formatedAmount}
            placeholder="$0000"
            keyboardType="numeric"
            maxLength={10}
          />

          {showErrorMessage && (
            <Text style={tw`text-red-500 text-xl text-center mb-2`}>
              Debe Ingresar Un Nombre
            </Text>
          )}

          <FormButtons handleSave={addNewIncome} hideForm={hideForm} />
        </View>
      </View>
    </Modal>
  );
};

export default IncomeModal;
