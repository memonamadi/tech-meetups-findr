import { combineReducers } from 'redux';
import MeetupsReducer from './reducer_meetups';

const rootReducer = combineReducers({
  meetups: MeetupsReducer
});

export default rootReducer;
