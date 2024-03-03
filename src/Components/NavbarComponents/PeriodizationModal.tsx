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

const PeriodizationModal = ({ visible, hideForm }: ModalForm) => {
  const [nombre, setNombre] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [type, setPeriodizateType] = useState<string>('');
  const [monto, setMonto] = useState<string>('');
  const [date, setDate] = useState<string>('0000/00/00');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleSave = () => {
    console.log(`Nombre: ${nombre}, Monto: ${monto} ,Fecha: ${date}`);
    hideForm();
  };

  const updateCategory = (value: string) => {
    setCategory(value);
  };

  const updateType = (value: string) => {
    setPeriodizateType(value);
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent={true}>
        {showCalendar === true ? (
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
        ) : (
          <View
            style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
          >
            <View style={tw`bg-white p-10 rounded-lg`}>
              <Text style={tw`font-bold text-lg mb-2`}>Nombre</Text>
              <TextInput
                style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
                onChangeText={setNombre}
                value={nombre}
                placeholder="Nombre de la operación"
              />
              <Text style={tw`font-bold text-lg mb-2`}>Monto</Text>
              <TextInput
                style={tw`border border-gray-300 rounded-md p-2 px-10 mb-2`}
                onChangeText={setMonto}
                value={monto}
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
              <PeriodizateTypeDropdown updateType={() => updateType(type)} />

              <Text style={tw`font-bold text-lg mb-2`}>Categoria</Text>
              <PeriodizateCategoryDropdown
                updateCategory={() => updateCategory(category)}
              />

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
        )}
      </Modal>
    </>
  );
};

export default PeriodizationModal;
