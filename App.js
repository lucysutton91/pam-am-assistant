import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { setAlarm, toggleAlarmStatus, setLeave, toggleLeaveStatus } from './store';
import DatePicker from 'react-native-datepicker';
import SetAlarm from './components/SetAlarm';
import HomeScreen from './components/HomeScreen';
import MorningScreen from './components/MorningScreen';

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SetAlarm: { screen: SetAlarm },
  MorningScreen: { screen: MorningScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});