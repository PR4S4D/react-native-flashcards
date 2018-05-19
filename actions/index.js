export const FETCH_DECKS = 'FETCH_DECKS';
export const DISPLAY_DECKS = 'DISPLAY_DECKS';
export const SAVE_DECK = 'SAVE_DECK';
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const GET_DECK = 'GET_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'

export const fetchDecks = () => ({type: FETCH_DECKS})

export const displayDecks = decks => ({type: DISPLAY_DECKS, payload: decks})

export const createDeck = title => ({type: SAVE_DECK, payload: title})

export const addCardToDeck = deck => ({type: ADD_CARD, payload: deck})

export const removeCard = deck => ({type: REMOVE_CARD, payload: deck})

export const getDeck = title => ({type: GET_DECK, payload: title})
