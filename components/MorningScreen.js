import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { setAlarm, toggleAlarmStatus, setLeave, toggleLeaveStatus, setCurrentTime } from '../store';
import DatePicker from 'react-native-datepicker';
import moment, { diff } from 'moment';

export default class MorningScreen extends React.Component {
    static navigationOptions = {
      title: 'Morning Screen',
    };
    constructor(props) {
      super(props)
      this.state = store.getState();
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
  
    render() {
      let timeRemaining = new Date(2017, 10, 14, 17, 30) - new Date().getTime();
        setTimeout(() => {
          store.dispatch(setCurrentTime(new Date()))
          timeRemaining = new Date(2017, 10, 14, 17, 30) - new Date().getTime();
        }, 1000);

      return (
        <View style={styles.container}>
          <Text style={styles.text}>{moment(this.state.time).format('LL')}</Text>
          <Text style={styles.text}>You need to leave at {this.state.leaveTime}</Text>
          <Text style={styles.text}> You have {timeRemaining} milliseconds to get out of here.</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    picker: {
        width: 250,
        margin: 10
    },
    confirmed: {
        width: 250,
        height: 40,
        borderColor: '#7FF6CC',
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        margin: 5
    },
    none: {
      alignItems: 'center'
    }
  });