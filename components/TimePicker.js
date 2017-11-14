import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, StyleSheet } from 'react-native';
import store from '../store';

export default class MyDatePicker extends Component {
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
                        onDateChange={(time) => { this.setState({ wakeUpTime: time, alarmSet: true }); }}
                    />
                    {
                        this.state.alarmSet === true ?
                            <View style={styles.confirmed}>
                                <Text>your alarm is set for {this.state.wakeUpTime}</Text>
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
                        onDateChange={(time) => { this.setState({ leaveTime: time, leaveSet: true }); }}
                    />
                    {
                        this.state.leaveSet === true ?
                            <View style={styles.confirmed}>
                                <Text>departure is scheduled for {this.state.leaveTime}</Text>
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
        justifyContent: 'center',
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
        justifyContent: 'center'
    }
});

//   ,
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   },