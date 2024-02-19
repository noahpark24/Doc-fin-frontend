import { SafeAreaView, ScrollView, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
import IncomeMovementCard from './MovementSectionComponents/IncomeMovementCard';

const MovementsSection = () => {
  let income = {
    id: 1,
    name: 'Regalo De Abuela',
    amount: 500,
    date: '10/02/24',
  };
  let movements = 1;

  return (
    <View>
      <Text style={tw.style(' text-white text-xl text-center')}>
        Movimientos
      </Text>
      {/*Movements Card*/}
      {movements < 1 ? (
        <View style={tw.style('bg-[#6d00a1]  w-74  max-h-62 rounded-b-2xl ')}>
          <View
            style={tw.style('flex items-center text-center justify-center')}
          >
            <Text style={tw.style('text-gray-200 text-xl mt-20')}>
              No Hay Nada Para Mostrar
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView
          style={tw`bg-[#6d00a1]  w-86 mb-22 max-h-80 rounded-2xl`}
          contentContainerStyle={tw`flex items-center text-center justify-center`}
        >
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
          <IncomeMovementCard />
        </ScrollView>
      )}
    </View>
  );
};

export default MovementsSection;
