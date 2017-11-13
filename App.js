import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: '9',
      minute: '30',
      morningOrNight: 'am'
    }
    this.updateHour = this.updateHour.bind(this);
    this.updateMinute = this.updateMinute.bind(this);
    this.updateAmPm = this.updateAmPm.bind(this);
  }
  updateHour(hour) {
    this.setState({ hour: hour })
  }
  updateMinute(minute) {
    this.setState({ minute: minute })
  }
  updateAmPm(morningOrNight) {
    this.setState({ morningOrNight: morningOrNight })
  }
  render() {
    let hours = (function () {
      let hrs = [];
      for (let i = 1; i < 13; i++) {
        var hour = i.toString();
        hrs.push(hour)
      }
      return hrs
    }());
    let minutes = (function () {
      let mins = ['00'];
      for (let i = 1; i < 60; i++) {
        let minute;
        if (i < 10) minute = '0' + i.toString();
        else minute = i.toString();
        mins.push(minute)
      }
      return mins
    }());
    return (
      <View style={styles.container}>
        <Picker style={styles.picker} selectedValue={this.state.hour} onValueChange={this.updateHour}>
          {
            hours.map(hour => {
              return <Picker.Item key={hour} label={hour} value={hour} />
            })
          }
        </Picker>
        <Picker style={styles.picker} selectedValue={this.state.minute} onValueChange={this.updateMinute}>
          {
            minutes.map(minute => {
              return <Picker.Item key={minute} label={minute} value={minute} />
            })
          }
        </Picker>
        <Picker style={styles.picker} selectedValue={this.state.morningOrNight} onValueChange={this.updateAmPm}>
          <Picker.Item key="am" label="am" value="am" />
          <Picker.Item key="pm" label="pm" value="pm" />        
        </Picker>
        <Text style={styles.text}>{this.state.hour + ':' + this.state.minute + ' ' + this.state.morningOrNight}</Text>
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})
