import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { globalStyles } from '../styles/globalStyles';

const CustomButton = (props) => {
  const {
    title,
    icon,
    iconColor,
    iconSize,
    buttonStyle,
    onPressHandler
  } = props;

  return (
    <TouchableOpacity
      style={[globalStyles.customButton, buttonStyle]}
      onPress={onPressHandler}>
      <Icon name={icon} size={iconSize || 28} color={iconColor || '#fff'} />
      <Text style={globalStyles.customButtonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
