import { ScrollView, Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Components
import IncomeMovementCard from './MovementSectionComponents/IncomeMovementCard';
import SpendMovementCard from './MovementSectionComponents/SpendMovementCard';

const MovementsSection = () => {
  let movements = 1;

  return (
    <>
      <Text style={tw.style(' text-white text-2xl text-center ')}>
        Movimientos
      </Text>
      {/*Movements Card*/}
      {movements < 1 ? (
        <View style={tw.style('bg-[#6d00a1] w-86 mb-10 h-92 rounded-2xl ')}>
          <View
            style={tw.style('flex items-center text-center justify-center')}
          >
            <Text style={tw.style('text-gray-200 text-2xl mt-30 ')}>
              No Hay Nada Para Mostrar
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView
          style={tw`bg-[#6d00a1]  w-86 mb-10 max-h-98 rounded-2xl`}
          contentContainerStyle={tw`flex items-center text-center justify-center`}
        >
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
          <IncomeMovementCard />
          <SpendMovementCard />
        </ScrollView>
      )}
    </>
  );
};

export default MovementsSection;
