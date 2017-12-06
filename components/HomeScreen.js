import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { setAlarm, toggleAlarmStatus, setLeave, toggleLeaveStatus } from '../store';
import DatePicker from 'react-native-datepicker';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Pam',
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
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Button
            onPress={() => navigate('SetAlarm')}
            title="alarms"
          />
          {
            this.state.alarmSet === true ?
            <View style={styles.confirmed}>
                <Text>wakeup {this.state.wakeUpTime}</Text>
            </View>
            :
            <View style={styles.none}>
                <Text>no alarms scheduled</Text>
            </View>
          }
          {
            this.state.leaveSet === true ?
            <View style={styles.confirmed}>
                <Text>leave the house {this.state.leaveTime}</Text>
            </View>
            :
            <View style={styles.none}>
                {/* <Text>no departure scheduled</Text> */}
            </View>
          }
          <Button
            onPress={() => navigate('MorningScreen')}
            title="morning"
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