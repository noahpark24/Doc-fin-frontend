import { Text, View } from 'react-native';
import { useState } from 'react';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
//Interfaces
import MonthlyRegister from '../../store/MonthlyRegister';
import monthlyRegisterInterface from '../../Interfaces/MonthlyRegisterInterface';
import IndividualRegistryModal from './NavModals/IndividualRegistryModal';
import RenderMoneyInfo from './RenderMoneyInfo';

const MonthlyRegisterCard = () => {
  const [showIndividualCard, setShowIndividualCard] = useState<boolean>(false);
  const [individualRegistry, setIndividualRegistry] =
    useState<monthlyRegisterInterface>();
  const [registryIndex, setRegistryIndex] = useState<number>();

  const handleCardPress = (
    registry: monthlyRegisterInterface,
    index: number
  ) => {
    setIndividualRegistry(registry);
    setShowIndividualCard(true);
    setRegistryIndex(index);
  };

  return (
    <>
      {MonthlyRegister.monthlyRegisters.map((registry, index: number) => (
        <View key={index}>
          <View
            style={tw.style('flex items-center justify-center mt-2')}
            onTouchEnd={() => handleCardPress(registry, index)}
          >
            <View
              style={tw.style(
                'bg-gray-300 rounded-md w-78 h-12 my-auto flex flex-row justify-between  '
              )}
            >
              {RenderMoneyInfo(registry)}
            </View>
          </View>
        </View>
      ))}

      <IndividualRegistryModal
        visible={showIndividualCard}
        hideForm={() => setShowIndividualCard(false)}
        registry={individualRegistry}
        index={registryIndex}
      />
    </>
  );
};

export default MonthlyRegisterCard;
