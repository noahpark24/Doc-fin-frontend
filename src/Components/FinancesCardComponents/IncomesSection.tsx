import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';
//Stores
import Money from '../../store/Money';
import { observer } from 'mobx-react-lite';

const IncomesSection = observer(() => {
  return (
    <>
      <View style={tw.style(`bg-[#6d00a1] flex flex-row justify-between p-6 `)}>
        <Text style={tw.style('text-white text-xl')}>Ingresos</Text>
        <Text
          style={tw.style(
            'text-green-600 rounded-md bg-green-300 mr-8 text-lg'
          )}
        >{`+ ${Money.totalIncomes}`}</Text>
      </View>
    </>
  );
});

export default IncomesSection;
