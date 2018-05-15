import {call, put, fork, takeEvery} from 'redux-saga/effects'
import * as actions from '../actions'

function * fetchDecks() {
  console.log('fetching decks')
}

function * rootSaga() {
  takeEvery(actions.FETCH_DECKS, fetchDecks)
}

export default rootSaga
