import React from 'react';
import { View, Text } from 'react-native';
import Card from './card';
import IconButton from './iconButton';
import { globalStyles } from '../styles/globalStyles';

const CounterCard = (props) => {
  const { title, value, onIncrement, onDecrement } = props;

  return (
    <Card style={[globalStyles.card, globalStyles.cardMarginLeft]}>
      <Text style={globalStyles.cardTitle}>{title}</Text>
      <Text style={globalStyles.cardValue}>{value}</Text>
      <View style={globalStyles.row}>
        <IconButton icon="minus" size={28} onPressHandler={onDecrement} />
        <IconButton icon="plus" size={28} onPressHandler={onIncrement} />
      </View>
    </Card>
  );
};

export default CounterCard;
