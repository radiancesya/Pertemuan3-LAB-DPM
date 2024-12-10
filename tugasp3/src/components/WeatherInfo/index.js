import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherInfo = ({ temperature }) => {
  let temperatureCategory = '';

  
  if (temperature < 10) {
    temperatureCategory = 'Dingin';
  } else if (temperature >= 10 && temperature <= 20) {
    temperatureCategory = 'Sejuk';
  } else if (temperature > 20 && temperature <= 30) {
    temperatureCategory = 'Hangat';
  } else {
    temperatureCategory = 'Panas';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.condition}>{temperatureCategory}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFE4E1', 
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#D46C91', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  temperature: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF69B4', 
  },
  condition: {
    fontSize: 20,
    color: '#D46C91', 
  },
});

export default WeatherInfo;
