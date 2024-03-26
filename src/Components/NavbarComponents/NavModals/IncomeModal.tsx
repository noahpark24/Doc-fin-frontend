import { useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Utils
import GetActualDate from '../../../Utils/GetActualDate';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
import IncomeInterface from '../../../Interfaces/IncomesInterface';
//States
import Movements from '../../../store/Movements';
//Components
import FormButtons from '../ModalFormButtons.tsx/FormButtons';

const IncomeModal = ({ visible, hideForm }: ModalForm) => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const date = GetActualDate();

  const addNewIncome = () => {
    let newIncome: IncomeInterface = {
      name: name,
      amount: Number(amount),
      date: date,
    };
    Movements.addIncome(newIncome);
    hideForm();
    setName('');
    setAmount('');
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={[
            tw`flex-1 justify-center items-center bg-black bg-opacity-50`,
          ]}
        >
          <View style={[tw`bg-white p-10 rounded-lg w-75`]}>
            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Nombre del ingreso
            </Text>
            <TextInput
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
              onChangeText={setName}
              value={name}
              placeholder=""
            />

            <Text style={tw`font-bold text-center text-lg mb-2`}>Monto</Text>
            <TextInput
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
              onChangeText={setAmount}
              value={amount}
              placeholder="$0000"
              keyboardType="numeric"
            />

            {/*Buttons*/}
            <FormButtons
              handleSave={() => addNewIncome()}
              hideForm={() => hideForm()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default IncomeModal;