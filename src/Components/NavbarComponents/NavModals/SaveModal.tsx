import { useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
//Styles
import tw from 'twrnc';
import colors from '../../../stylesheets/colors';
//Interfaces
import ModalForm from '../../../Interfaces/ModalForm';
import monthlyRegisterInterface from '../../../Interfaces/MonthlyRegisterInterface';
//Stores
import Money from '../../../store/Money';
import MonthlyRegister from '../../../store/MonthlyRegister';
//Utils
import { getMonthName } from '../../../Utils/GetActualMonth';
import { getCurrentYear } from '../../../Utils/GetActualYear';
//Components
import FinancesRegistry from '../../FinancesRegistry';

const SaveModal = ({ visible, hideForm }: ModalForm) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFinancesRegistry, setShowFinancesRegistry] = useState(false);

  const currentMonth = getMonthName();
  const currentYear = getCurrentYear();

  const saveMonthlyRegister = () => {
    const newRegister: monthlyRegisterInterface = {
      month: currentMonth,
      year: currentYear,
      day: 19,
      totalIncomes: Money.totalIncomes,
      totalSpends: Money.totalSpends,
      leftOverMoney: Money.availableMoney,
    };
    MonthlyRegister.addNewRegister(newRegister);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      hideForm();
    }, 1500);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      {showFinancesRegistry ? (
        <>
          <FinancesRegistry onBack={() => setShowFinancesRegistry(false)} />
        </>
      ) : (
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-10 rounded-lg w-75`}>
            <Text
              onPress={() => saveMonthlyRegister()}
              style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
            >
              Guardar Resumen Mensual
            </Text>

            <TouchableOpacity onPress={() => setShowFinancesRegistry(true)}>
              <Text
                style={tw`border border-gray-300 text-center rounded-md p-2 px-10 mb-2`}
              >
                Ver Resúmenes Mensuales
              </Text>
            </TouchableOpacity>

            {showSuccessMessage && (
              <Text style={tw`text-green-500 text-xl text-center mb-2`}>
                Resumen guardado con éxito.
              </Text>
            )}

            <TouchableOpacity
              onPress={() => hideForm()}
              style={tw.style(`p-3  bg-[${colors.button_bg}]`)}
            >
              <Text style={tw.style(`text-${colors.text_ligth} text-center`)}>
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default SaveModal;
