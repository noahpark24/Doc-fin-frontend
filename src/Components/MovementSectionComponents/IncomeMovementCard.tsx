import { Text, View } from 'react-native';
import { useState } from 'react';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
//States
import Movements from '../../store/Movements';
//Interfaces
import IncomeInterface from '../../Interfaces/IncomesInterface';
import IndividualIncomeModal from './Modals/IndividualIncomeModal';

const IncomeMovementCard = () => {
  const [showIndividualCard, setShowIndividualCard] = useState<boolean>(false);
  const [individualIncome, setIndividualIncome] = useState<IncomeInterface>();
  const [incomeIndex, setIncomeIndex] = useState<number>();

  const handleCardPress = (income: IncomeInterface, index: number) => {
    setIndividualIncome(income);
    setShowIndividualCard(true);
    setIncomeIndex(index);
  };

  return (
    <>
      {/*Income Movement Card */}
      {Movements.incomes.map((income, index: number) => (
        <View key={index}>
          <View
            style={tw.style('flex items-center justify-center mt-2')}
            onTouchEnd={() => handleCardPress(income, index)}
          >
            <View
              style={tw.style(
                'bg-green-300 rounded-md w-78 h-12 my-auto flex flex-row justify-between  '
              )}
            >
              <AntDesign
                style={tw.style('ml-2 mt-2')}
                name="pluscircle"
                size={30}
                color="green"
              />
              <View>
                <Text style={tw.style('text-base text-center')}>
                  {`${income.name.substring(0, 18)}`}
                </Text>
                <Text style={tw.style('text-center ')}>{`${income.date}`}</Text>
              </View>
              <Text
                style={tw.style('text-green-800 text-lg mr-2 mt-1')}
              >{`+ ${income.amount}`}</Text>
            </View>
          </View>
        </View>
      ))}
      <IndividualIncomeModal
        visible={showIndividualCard}
        hideForm={() => setShowIndividualCard(false)}
        operation={individualIncome}
        index={incomeIndex}
      />
    </>
  );
};

export default IncomeMovementCard;
