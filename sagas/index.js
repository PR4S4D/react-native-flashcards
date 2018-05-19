import {put, takeEvery, call} from 'redux-saga/effects'
import * as ACTIONS from '../actions'
import decks from '../utils/intialData'
import * as API from '../utils/api'

function * fetchDecks() {
  let decks = yield API.getDecks()
  yield put({type: ACTIONS.DISPLAY_DECKS, payload: decks})
}

function * saveDeck(action) {
  yield API.saveDeck(action.payload)
  yield fetchDecks()
}

function * addCardToDeck(action) {
  yield API.addCardToDeck(action.payload)
  yield put({type: ACTIONS.GET_DECK, payload: action.payload.title})
  yield fetchDecks()
}

function * removeCard(action) {
  yield API.removeCardFromDeck(action.payload)
  yield fetchDecks()
}

function * getDeck(action) {
  let deck = yield API.getDeck(action.payload)
  yield put({type: ACTIONS.UPDATE_DECK, payload: deck})
  yield fetchDecks()
}

function * rootSaga() {
  yield takeEvery(ACTIONS.FETCH_DECKS, fetchDecks)
  yield takeEvery(ACTIONS.SAVE_DECK, saveDeck)
  yield takeEvery(ACTIONS.ADD_CARD, addCardToDeck)
  yield takeEvery(ACTIONS.REMOVE_CARD, removeCard)
  yield takeEvery(ACTIONS.GET_DECK, getDeck)
}

export default rootSaga
