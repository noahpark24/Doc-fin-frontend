import { Text, View } from 'react-native';
//Styles
import tw from 'twrnc';

const FinanceCardHeader = () => {
  let availableMoney = 175000;

  return (
    <>
      <View style={tw.style('bg-[#3C0753] px-24  pb-4 rounded-t-xl  ')}>
        <Text style={tw.style('text-lg text-white mt-2')}>
          Dinero Disponible
        </Text>
        <Text
          style={tw.style('text-white text-xl text-center')}
        >{`$${availableMoney}`}</Text>
      </View>
    </>
  );
};

export default FinanceCardHeader;
