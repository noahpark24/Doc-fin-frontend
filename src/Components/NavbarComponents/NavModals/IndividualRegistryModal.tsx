import { Modal, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
//Store
import MonthlyRegister from '../../../store/MonthlyRegister';
//Componentes
import MovementFormButtons from '../../MovementSectionComponents/Modals/Buttons/MovementFormButtons';
//Utils
import FormatMoneyValue from '../../../Utils/FormatMoneyValue';

const IndividualRegistryModal = ({
  visible,
  hideForm,
  registry,
  index,
}: ModalForm) => {
  const removeRegistry = () => {
    if (index !== undefined) {
      MonthlyRegister.removeRegistry(index);
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
              Fecha Del Registro
            </Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {`${registry?.day} de ${registry?.month} de ${registry?.year}`}
            </Text>

            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Dinero Restante
            </Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {FormatMoneyValue(`${registry?.leftOverMoney}`)}
            </Text>

            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Ingresos Totales
            </Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {FormatMoneyValue(`${registry?.totalIncomes}`)}
            </Text>

            <Text style={tw`font-bold text-center text-lg mb-2`}>
              Gastos Totales
            </Text>
            <Text
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              {FormatMoneyValue(`${registry?.totalSpends}`)}
            </Text>

            {/*Buttons*/}
            <MovementFormButtons
              handleDelete={() => removeRegistry()}
              hideForm={() => hideForm()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default IndividualRegistryModal;
