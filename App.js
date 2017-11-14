import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import TimePicker from './components/TimePicker';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TimePicker />
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

