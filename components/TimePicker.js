import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
        time:"09:30"
    }
  }

  render(){
    return (
        <DatePicker
            style={{width: 200}}
            date={this.state.time}
            mode="time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minuteInterval={1}
            onDateChange={(time) => {this.setState({time: time});}}
        />
    )
  }
}