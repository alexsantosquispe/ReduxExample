import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './card';
import { globalStyles } from '../styles/globalStyles';

const IconCard = (props) => {
  const { title, iconName, onChangeValue } = props;

  const onSelected = () => {
    const { value } = props;
    onChangeValue(value);
  };

  return (
    <Card onPressHandler={onSelected}>
      <View style={globalStyles.genderIcon}>
        <Icon name={iconName} size={80} color="#333" />
      </View>
      <Text style={globalStyles.cardTitle}>{title}</Text>
    </Card>
  );
};

export default IconCard;
