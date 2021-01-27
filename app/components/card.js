import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const Card = (props) => {
  const { onPressHandler } = props;
  const onPressItem = () => {
    onPressHandler();
  };
  return onPressHandler && typeof onPressHandler === 'function' ? (
    <TouchableOpacity style={[globalStyles.card, {}]} onPress={onPressItem}>
      <View>{props.children}</View>
    </TouchableOpacity>
  ) : (
    <View style={globalStyles.card}>
      <View>{props.children}</View>
    </View>
  );
};

export default Card;
