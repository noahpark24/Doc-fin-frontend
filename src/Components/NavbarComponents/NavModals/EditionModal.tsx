import { useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import { observer } from 'mobx-react-lite'; // Importa el observer
//Styles
import tw from 'twrnc';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
//States
import Money from '../../../store/Money';
//Components
import FormButtons from '../ModalFormButtons.tsx/FormButtons';
//Utils
import FormatMoneyValue from '../../../Utils/FormatMoneyValue';

const EditionModal = observer(({ visible, hideForm }: ModalForm) => {
  const [availableMoney, setAvailableMoney] = useState<string>(
    FormatMoneyValue(Money.availableMoney.toString())
  );
  const [totalIncomes, setTotalIncomes] = useState<string>(
    FormatMoneyValue(Money.totalIncomes.toString())
  );
  const [totalSpends, setTotalSpends] = useState<string>(
    FormatMoneyValue(Money.totalSpends.toString())
  );

  const updateFinancesValues = () => {
    Money.updateAvailableMoney(Number(availableMoney.replace(',', '')));
    Money.updateTotalIncomes(Number(totalIncomes.replace(',', '')));
    Money.updateTotalSpends(Number(totalSpends.replace(',', '')));
    hideForm();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
      >
        <View style={tw`bg-white p-10 rounded-lg w-75`}>
          <Text style={tw`font-bold text-center text-lg mb-2`}>
            Dinero Disponible
          </Text>
          <TextInput
            style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            onChangeText={setAvailableMoney}
            value={availableMoney}
            keyboardType="numeric"
            maxLength={10}
          />

          <Text style={tw`font-bold text-center text-lg mb-2`}>
            Ingresos Totales
          </Text>
          <TextInput
            style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            onChangeText={setTotalIncomes}
            value={totalIncomes}
            keyboardType="numeric"
            maxLength={10}
          />

          <Text style={tw`font-bold text-center text-lg mb-2`}>
            Gastos Totales
          </Text>
          <TextInput
            style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            onChangeText={setTotalSpends}
            value={totalSpends}
            keyboardType="numeric"
            maxLength={10}
          />

          {/*Buttons*/}
          <FormButtons
            handleSave={() => updateFinancesValues()}
            hideForm={() => hideForm()}
          />
        </View>
      </View>
    </Modal>
  );
});

export default EditionModal;
