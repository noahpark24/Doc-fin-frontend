import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Stores
import Money from '../../store/Money';
import { observer } from 'mobx-react-lite';

const FinanceCardHeader = observer(() => {
  return (
    <>
      <View style={tw.style('bg-[#3C0753] w-86  pb-4 rounded-t-xl  ')}>
        <Text style={tw.style('text-lg text-white text-center mt-2')}>
          Dinero Disponible
        </Text>

        <Text
          style={tw.style('text-white text-xl text-center')}
        >{`$${Money.availableMoney}`}</Text>
      </View>
    </>
  );
});

export default FinanceCardHeader;
