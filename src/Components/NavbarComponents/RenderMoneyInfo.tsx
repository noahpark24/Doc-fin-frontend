import { Text, View } from 'react-native';
import { useState } from 'react';
//Styles
import tw from 'twrnc';
//Icons
import { AntDesign } from '@expo/vector-icons';
//Interfaces
import monthlyRegisterInterface from '../../Interfaces/MonthlyRegisterInterface';
import FormatMoneyValue from '../../Utils/FormatMoneyValue';

const RenderMoneyInfo = (registry: monthlyRegisterInterface) => {
  const moneyIcon =
    registry.leftOverMoney > 0 ? (
      <AntDesign
        style={tw.style('ml-2 mt-2')}
        name="pluscircle"
        size={30}
        color="green"
      />
    ) : (
      <AntDesign
        style={tw.style('ml-2 mt-2')}
        name="minuscircle"
        size={30}
        color="red"
      />
    );

  const moneyText =
    registry.leftOverMoney > 0 ? (
      <Text style={tw.style('text-green-800 text-lg mr-2 mt-1')}>
        {`+ ${FormatMoneyValue(`${registry.leftOverMoney}`)}`}
      </Text>
    ) : (
      <Text style={tw.style('text-red-800 text-lg mr-2 mt-1')}>
        {` ${FormatMoneyValue(`${registry.leftOverMoney}`)}`}
      </Text>
    );

  return (
    <>
      {moneyIcon}
      <View>
        <Text style={tw.style('text-base text-center')}>
          {`${registry.day} de`}
        </Text>
        <Text style={tw.style('text-center ')}>
          {`${registry.month} de ${registry.year}`}
        </Text>
      </View>
      {moneyText}
    </>
  );
};

export default RenderMoneyInfo;
