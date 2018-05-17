import {put, takeEvery} from 'redux-saga/effects'
import * as ACTIONS from '../actions'
import decks from '../utils/intialData'
import * as API from '../utils/api'

function * fetchDecks() {
  let decks = yield API.getDecks()
  yield put({type: ACTIONS.DISPLAY_DECKS, payload: decks})
}

function * rootSaga() {
  yield takeEvery(ACTIONS.FETCH_DECKS, fetchDecks)

}

export default rootSaga
