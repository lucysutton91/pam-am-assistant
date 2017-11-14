import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        setTimeout(() => {
			store.dispatch(setCurrentTime(new Date()))
        }, 1000);
      return (
        <View style={styles.container}>
          <Text>{moment(this.state.time).format('LL')}</Text>
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