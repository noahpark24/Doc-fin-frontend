import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import Movements from '../../store/Movements';
import PeriodizationInterface from '../../Interfaces/PeriodizationInterface';

const PeriodizatedIncomeCard = () => {
  const [filteredIncomes, setFilteredIncomes] = useState<
    PeriodizationInterface[]
  >([]);

  useEffect(() => {
    const date = new Date();
    const today = date.toISOString().split('T')[0];
    const filtered = Movements.periodizatedIncomes.filter(
      (income) => income.date === today
    );
    setFilteredIncomes(filtered);
  }, []);

  return (
    <>
      {filteredIncomes.length > 0 ? (
        filteredIncomes.map((income, index) => (
          <View key={index} style={tw`flex items-center justify-center mt-2`}>
            <View
              style={tw`bg-green-300 rounded-md w-78 h-12 my-auto flex flex-row justify-between`}
            >
              <AntDesign
                name="pluscircle"
                size={30}
                color="green"
                style={tw`ml-2 mt-2`}
              />
              <View>
                <Text
                  style={tw`text-base text-center`}
                >{`${income.name.substring(0, 18)}`}</Text>
                <Text style={tw`text-center`}>{`${income.date}`}</Text>
              </View>
              <Text
                style={tw`text-green-800 text-lg mr-2 mt-1`}
              >{`+ ${income.amount}`}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text>No hay ingresos periodizados para hoy</Text>
      )}
    </>
  );
};

export default PeriodizatedIncomeCard;
