import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// INITIAL STATE

const initialState = {
    wakeUpTime: '09:30',
    leaveTime: '10:00',
    alarmSet: false,
    leaveSet: false,
    time: new Date()
};

// ACTION TYPES

const SET_WAKEUP = 'SET_WAKEUP';
const GET_WAKEUP = 'GET_WAKEUP';
const SET_LEAVE = 'SET_LEAVE';
const GET_LEAVE = 'GET_LEAVE';
const TOGGLE_ALARM_STATUS = 'TOGGLE_ALARM_STATUS';
const TOGGLE_LEAVE_STATUS = 'TOGGLE_LEAVE_STATUS';
const SET_TIME = 'SET_TIME';


// ACTION CREATORS

export function setAlarm(time) {
    const action = { type: SET_WAKEUP, time };
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

export function getLeave(time) {
    const action = { type: GET_LEAVE, time };
    return action;
}

export function toggleAlarmStatus(boolean) {
    const action = { type: TOGGLE_ALARM_STATUS, boolean };
    return action;
}

export function toggleLeaveStatus(boolean) {
    const action = { type: TOGGLE_LEAVE_STATUS, boolean };
    return action;
}

export function setCurrentTime(time) {
    const action = { type: SET_TIME, time };
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
        case SET_LEAVE:
            newState = Object.assign({}, state, { leaveTime: action.time });
            break;
        case TOGGLE_ALARM_STATUS:
            newState = Object.assign({}, state, { alarmSet: action.boolean });
            break;
        case TOGGLE_LEAVE_STATUS:
            newState = Object.assign({}, state, { leaveSet: action.boolean });
            break;
        case SET_TIME:
            newState = Object.assign({}, state, { time: action.time });
            break;
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
        thunkMiddleware,
        createLogger()
    ))
    
);

export default store;
