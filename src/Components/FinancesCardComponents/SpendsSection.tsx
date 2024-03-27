import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
//Styles
import tw from 'twrnc';
//Stores
import Money from '../../store/Money';
//Utils
import FormatMoneyValue from '../../Utils/FormatMoneyValue';

const SpendsSection = observer(() => {
  const formattedTotalSpends = FormatMoneyValue(`${Money.totalSpends}`);

  return (
    <>
      <View
        style={tw.style(
          `bg-[#6d00a1] flex flex-row justify-between p-6 rounded-b-xl`,
          'border-t border-t-gray-300 border-l-0 border-r-0 border-b-0'
        )}
      >
        <Text style={tw.style('text-white text-xl')}>Gastos</Text>
        <Text
          style={tw.style('text-red-300 bg-red-600 rounded-md mr-8 text-lg')}
        >{` ${formattedTotalSpends}`}</Text>
      </View>
    </>
  );
});

export default SpendsSection;
