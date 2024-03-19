import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
//States
import Movements from '../../store/Movements';

const IncomeMovementCard = () => {
  return (
    <>
      {/*Income Movement Card */}
      {Movements.incomes.map((income, index) => (
        <View
          key={index}
          style={tw.style('flex items-center justify-center mt-2')}
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
              <Text
                style={tw.style(' text-base text-center')}
              >{`${income.name.substring(0, 18)}`}</Text>
              <Text style={tw.style(' text-center ')}>{`${income.date}`}</Text>
            </View>
            <Text
              style={tw.style('text-green-800 text-lg mr-2 mt-1')}
            >{`+ ${income.amount}`}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default IncomeMovementCard;
