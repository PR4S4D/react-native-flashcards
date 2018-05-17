export const FETCH_DECKS = 'FETCH_DECKS';
export const DISPLAY_DECKS = 'DISPLAY_DECKS';
export const SAVE_DECK = 'SAVE_DECK';

export const fetchDecks = () => ({type: FETCH_DECKS})

export const displayDecks = decks => ({type: DISPLAY_DECKS, payload: decks})