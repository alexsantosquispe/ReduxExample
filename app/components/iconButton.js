import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { globalStyles } from '../styles/globalStyles';

const IconButton = (props) => {
  const { icon, size, onPressHandler } = props;
  return (
    <TouchableOpacity style={globalStyles.iconButton} onPress={onPressHandler}>
      <Icon name={icon} size={size} color="#fff" />
    </TouchableOpacity>
  );
};

export default IconButton;
