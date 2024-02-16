import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';

const IncomesSection = () => {
  let incomes = 0;

  return (
    <>
      <View style={tw.style(`bg-[#6d00a1] flex flex-row justify-between p-6 `)}>
        <Text style={tw.style('text-white text-xl')}>Ingresos</Text>
        <Text
          style={tw.style('text-white mr-8 text-lg')}
        >{`$ ${incomes}`}</Text>
      </View>
    </>
  );
};

export default IncomesSection;
