import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
//States
import Movements from '../../store/Movements';

const SpendMovementCard = () => {
  return (
    <>
      {/* Spend Movement Cards */}
      {Movements.spends.map((spend, index) => (
        <View
          key={index}
          style={tw.style('flex items-center justify-center mt-2')}
        >
          <View
            style={tw.style(
              'bg-red-300 rounded-md w-78 h-12 my-auto flex flex-row justify-between items-center'
            )}
          >
            <AntDesign
              style={tw.style('ml-2 mt-2')}
              name="minuscircle"
              size={30}
              color="red"
            />
            <View style={tw.style('flex flex-col justify-center')}>
              <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`text-base`}>{`${spend.name.substring(
                  0,
                  18
                )}`}</Text>
                {spend.quantity && <Text>{`x${spend.quantity}`}</Text>}
              </View>
              <Text style={tw`text-center`}>{`${spend.date}`}</Text>
            </View>
            <Text
              style={tw.style('text-red-800 text-lg mr-2 mt-1')}
            >{`- ${spend.amount}`}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default SpendMovementCard;
