import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RefreshButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Segarkan</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#FF69B4', 
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default RefreshButton;
