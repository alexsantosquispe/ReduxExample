import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../styles/globalStyles';

const ResultModal = (props) => {
  const { isVisible } = props;
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={globalStyles.card}>
          <Text>Result</Text>
          <Text style={{ fontSize: 70 }}>25.5</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ResultModal;

const styles = StyleSheet.create({});
