import { ScrollView, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
//Styles
import tw from 'twrnc';
//Components
import IncomeMovementCard from './MovementSectionComponents/IncomeMovementCard';
import SpendMovementCard from './MovementSectionComponents/SpendMovementCard';
//States
import Movements from '../store/Movements';

const MovementsSection = observer(() => {
  return (
    <>
      <Text style={tw.style(' text-white text-2xl text-center ')}>
        Movimientos
      </Text>
      {/*Movements Card*/}
      {Movements.incomes.length < 1 && Movements.spends.length < 1 ? (
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
        </ScrollView>
      )}
    </>
  );
});

export default MovementsSection;
