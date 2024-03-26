import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
//Styles
import colors from '../../stylesheets/colors';
import tw from 'twrnc';
//Dropdowns
import PeriodizateCategoryDropdown from './Dropdowns/PeriodizateCategoryDropdown';
import PeriodizateTypeDropdown from './Dropdowns/PeriodizateTypeDropdown';
//Calendar
import { Calendar } from 'react-native-calendars';
//Interfaces
import ModalForm from '../../Interfaces/ModalForm';
import PeriodizationInterface from '../../Interfaces/PeriodizationInterface';
//Components
import FormButtons from './ModalFormButtons.tsx/FormButtons';
//States
import Movements from '../../store/Movements';

const PeriodizationModal = ({ visible, hideForm }: ModalForm) => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<
    'Factura' | 'Salario' | 'Suscripcion' | 'Otro'
  >('Otro');
  const [type, setMovementType] = useState<'Ingreso' | 'Gasto'>('Gasto');
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<string>('0000/00/00');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const updateType = (value: 'Ingreso' | 'Gasto') => {
    setMovementType(value);
  };

  const updateCategory = (
    value: 'Factura' | 'Salario' | 'Suscripcion' | 'Otro'
  ) => {
    setCategory(value);
  };

  const addNewMovement = () => {
    let newMovement: PeriodizationInterface = {
      name: name,
      amount: Number(amount),
      date: date,
      operationType: type,
      category: category,
    };

    if (newMovement.operationType === 'Ingreso') {
      Movements.addPeriodizatedIncome(newMovement);
    } else {
      Movements.addPeriodizatedSpend(newMovement);
    }

    hideForm();
    setAmount('');
    setName('');
    setDate('0000/00/00');
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        {showCalendar === true ? (
          <View style={tw.style('h-full bg-purple-400')}>
            <View style={tw.style('my-auto px-2')}>
              <Calendar
                onDayPress={(day) => {
                  setDate(day.dateString);
                  setShowCalendar(false);
                }}
                markedDates={{
                  [date]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: 'purple',
                  },
                }}
              />
            </View>
          </View>
        ) : (
          <View
            style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
          >
            <View style={tw`bg-white p-10 rounded-lg`}>
              <Text style={tw`font-bold text-lg mb-2`}>Nombre</Text>
              <TextInput
                style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
                onChangeText={setName}
                value={name}
                placeholder="Nombre de la operación"
              />
              <Text style={tw`font-bold text-lg mb-2`}>Monto</Text>
              <TextInput
                style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
                onChangeText={setAmount}
                value={amount}
                placeholder="$0000"
                keyboardType="numeric"
              />
              <Text style={tw`font-bold text-lg mb-2`}>Fecha</Text>
              <TouchableOpacity
                onPress={() => setShowCalendar(true)}
                style={tw.style(
                  'p-2 px-10 rounded-md border border-gray-300 mb-2'
                )}
              >
                <Text style={tw.style('text-gray-500 ')}>{date}</Text>
              </TouchableOpacity>

              {/* Dropdowns */}
              <Text style={tw`font-bold text-lg mb-2`}>Tipo De Operación</Text>
              <PeriodizateTypeDropdown setNewType={updateType} />
              <Text style={tw`font-bold text-lg mb-2`}>Categoria</Text>
              <PeriodizateCategoryDropdown setNewCategory={updateCategory} />

              {/*Buttons */}
              <FormButtons
                hideForm={() => hideForm()}
                handleSave={() => addNewMovement()}
              />
            </View>
          </View>
        )}
      </Modal>
    </>
  );
};

export default PeriodizationModal;
