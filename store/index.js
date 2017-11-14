import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// INITIAL STATE

const initialState = {
    wakeUpTime: '09:30',
    leaveTime: '10:00',
    alarmSet: false,
    leaveSet: false
};

// ACTION TYPES

const SET_WAKEUP = 'SET_WAKEUP';
const UPDATE_WAKEUP = 'UPDATE_WAKEUP';
const GET_WAKEUP = 'GET_WAKEUP';
const SET_LEAVE = 'SET_LEAVE';
const UPDATE_LEAVE = 'UPDATE_LEAVE';
const GET_LEAVE = 'GET_LEAVE';
const TOGGLE_ALARM_STATUS = 'TOGGLE_ALARM_STATUS';
const TOGGLE_LEAVE_STATUS = 'TOGGLE_LEAVE_STATUS';


// ACTION CREATORS

export function setAlarm(time) {
    const action = { type: SET_WAKEUP, time };
    return action;
}

export function updateAlarm(time) {
    const action = { type: UPDATE_WAKEUP, time };
    return action;
}

export function getAlarm(time) {
    const action = { type: GET_WAKEUP, time };
    return action;
}

export function setLeave(time) {
    const action = { type: SET_LEAVE, time };
    return action;
}

export function updateLeave(time) {
    const action = { type: UPDATE_LEAVE, time };
    return action;
}

export function getLeave(time) {
    const action = { type: GET_LEAVE, time };
    return action;
}

export function toggleAlarmStatus(boolean) {
    const action = { type: TOGGLE_ALARM_STATUS, boolean };
    return action;
}

export function toogleLeaveStatus(boolean) {
    const action = { type: TOGGLE_LEAVE_STATUS, boolean };
    return action;
}

// THUNK CREATORS

// Should I put calendar events here?

// REDUCER

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {

        case SET_WAKEUP:
            newState = Object.assign({}, state, { wakeUpTime: action.time });
            break;

        case UPDATE_WAKEUP:
            newState = Object.assign({}, state, { wakeUpTime: action.time });
            break;

        // case GET_ALARM:
        //     newState = Object.assign({}, state, { wakeUpTime: action.time });
        //     break;

        default:
            newState = state;
            break;
    }
    return newState;
}

// CREATE AND EXPORT STORE

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware
    ))
);

export default store;
