import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import IncomeMovementCard from './MovementSectionComponents/IncomeMovementCard';

let income = {
  id: 1,
  name: 'Regalo De Abuela',
  amount: 500,
  date: '10/02/24',
};

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value }: any) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#181D31', '#678983'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        tw`justify-center items-center`,
        {
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderColor,
        },
      ]}
    >
      <Text style={tw`text-white font-bold text-2xl`}>Header Content</Text>
    </Animated.View>
  );
};

const ScrollViewScreen = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <View style={tw`flex-1`}>
      <DynamicHeader value={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        {
          <View>
            <Text style={tw.style(' text-white text-xl text-center')}>
              Movimientos
            </Text>
            <View
              style={tw.style('bg-[#6d00a1]  w-86 mb-22  h-80 rounded-2xl ')}
            >
              <IncomeMovementCard />
            </View>
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default ScrollViewScreen;
