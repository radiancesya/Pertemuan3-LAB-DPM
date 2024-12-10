import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import WeatherLifecycle from '../../lifecycle';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <WeatherLifecycle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', 
  },
});

export default HomePage;
