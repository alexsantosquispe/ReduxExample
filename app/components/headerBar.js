import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const HeaderBar = (props) => {
  const { title } = props;
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.headerTitle}>{title}</Text>
    </View>
  );
};

export default HeaderBar;
