import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherInfo from '../components/WeatherInfo';
import RefreshButton from '../components/RefreshButton';

class WeatherLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 25, 
    };
  }

  componentDidMount() {
    this.loadWeatherData();
  }

  componentWillUnmount() {
    console.log('Weather component is about to unmount');
  }

  loadWeatherData = async () => {
    
    const temperature = 25; 
    this.setState({ temperature });
  };

  handleRefresh = () => {
    
    const newTemperature = Math.floor(Math.random() * 41); 
    this.setState({ temperature: newTemperature });
  };

  render() {
    return (
      <View style={styles.container}>
        <WeatherInfo temperature={this.state.temperature} />
        <RefreshButton onPress={this.handleRefresh} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', 
  },
});

export default WeatherLifecycle;
