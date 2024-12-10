import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aplikasi Cek Suhu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFC0CB', 
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#D46C91', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D46C91', 
  },
});
export default Header;
