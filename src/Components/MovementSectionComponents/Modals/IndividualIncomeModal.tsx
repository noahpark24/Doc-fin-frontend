import { Modal, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
//Components
import MovementFormButtons from './Buttons/MovementFormButtons';
//Store
import Movements from '../../../store/Movements';

const IndividualIncomeModal = ({
  visible,
  hideForm,
  income,
  index,
}: ModalForm) => {
  const removeIncome = () => {
    if (index !== undefined) {
      Movements.removeIncome(index);
      hideForm();
    }
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
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {income?.name}
            </Text>

            <Text style={tw`font-bold text-center text-lg mb-2`}>Monto</Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {income?.amount}
            </Text>

            <Text style={tw`font-bold text-center text-lg mb-2`}>Fecha</Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {income?.date}
            </Text>

            {/*Buttons*/}
            <MovementFormButtons
              handleDelete={() => removeIncome()}
              hideForm={() => hideForm()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default IndividualIncomeModal;
