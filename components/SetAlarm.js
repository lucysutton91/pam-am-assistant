import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, StyleSheet, Button } from 'react-native';
import store, { setAlarm, toggleAlarmStatus, setLeave, toggleLeaveStatus } from '../store';

export default class SetAlarm extends React.Component {
    static navigationOptions = {
      title: 'Alarms',
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
        console.log('state', this.state)
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>click to schedule wakeup</Text>
                    <DatePicker
                        style={styles.picker}
                        date={this.state.wakeUpTime}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={1}
                        showIcon={false}
                        customStyles={{
                            dateInput: {
                                borderRadius: 5
                            }
                        }}
                        onDateChange={(time) => { 
                          store.dispatch(setAlarm(time))
                          store.dispatch(toggleAlarmStatus(true))
                        }}
                    />
                    {
                        this.state.alarmSet === true ?
                        <View>
                            <View style={styles.confirmed}>
                                <Text>your alarm is set for {this.state.wakeUpTime}</Text>
                            </View>
                            <Button
                                onPress={(time) => { 
                                    store.dispatch(toggleAlarmStatus(false))
                                }}
                                title="cancel"
                                color="#0097F0"
                            />
                        </View>
                            :
                            <View style={styles.none}>
                                <Text>no alarm scheduled</Text>
                            </View>
                    }
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>click to schedule departure</Text>
                    <DatePicker
                        style={styles.picker}
                        date={this.state.leaveTime}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={1}
                        showIcon={false}
                        customStyles={{
                            dateInput: {
                                borderRadius: 5
                            }
                        }}
                        onDateChange={(time) => { 
                          store.dispatch(setLeave(time))
                          store.dispatch(toggleLeaveStatus(true))
                         }}
                    />
                    {
                        this.state.leaveSet === true ?
                        <View>
                            <View style={styles.confirmed}>
                                <Text>departure is scheduled for {this.state.leaveTime}</Text>
                            </View>
                            <Button
                                onPress={(time) => { 
                                    store.dispatch(toggleLeaveStatus(false))
                                }}
                                title="cancel"
                                color="#0097F0"
                            />
                        </View>
                            :
                            <View style={styles.none}>
                                <Text>no departure scheduled</Text>
                            </View>
                    }
                </View>
                
            </View>
        )
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
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 20
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
        justifyContent: 'center'
    },
    none: {
      alignItems: 'center'
    }
  });