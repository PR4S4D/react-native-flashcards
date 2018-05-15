import {combineReducers} from 'redux'
import initialData from '../utils/intialData'
import * as actions from '../actions'

const decks = (state = initialData, action) => {
  switch (action.type) {
    case actions.FETCH_DECKS:
      return state
    default:
      return state
  }
}

export default combineReducers({decks})