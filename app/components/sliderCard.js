import React from 'react';
import { Text } from 'react-native';
import Slider from '@react-native-community/slider';
import Card from './card';
import { globalStyles } from '../styles/globalStyles';

const SliderCard = (props) => {
  const {
    title,
    value,
    initValue = 10,
    minValue = 0,
    maxValue = 200,
    onChangeValue
  } = props;

  return (
    <Card>
      <Text style={globalStyles.cardTitle}>{title}</Text>
      <Text style={globalStyles.cardValue}>{value}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        value={initValue}
        minimumValue={minValue}
        maximumValue={maxValue}
        minimumTrackTintColor="#0084FF"
        maximumTrackTintColor="#333"
        thumbTintColor="#0084FF"
        onValueChange={onChangeValue}
      />
    </Card>
  );
};

export default SliderCard;
