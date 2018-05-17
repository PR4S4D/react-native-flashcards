import {combineReducers} from 'redux'
import initialData from '../utils/intialData'
import * as ACTIONS from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_DECKS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({decks})