import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../styles/globalStyles';

const ResultModal = (props) => {
  const { data, isVisible, onPressBackdrop } = props;
  const { bmi, diagnostic } = data;
  const message = 'Normal range: 18.5 - 24.9';
  const colorStyle = diagnostic ? globalStyles[diagnostic.toLowerCase()] : {};

  return (
    <View>
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.5}
        onBackdropPress={onPressBackdrop}>
        <View style={globalStyles.bmiModalContainer}>
          <Text style={globalStyles.bmiResult}>{bmi}</Text>
          <Text style={[globalStyles.bmiDiagnostic, colorStyle]}>
            {diagnostic}
          </Text>
          <Text style={globalStyles.bmiMessage}>{message}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ResultModal;

const styles = StyleSheet.create({});
