import Decks from '../components/Decks'
import {connect} from 'react-redux'
import {fetchDecks} from '../actions'

const mapStateToProps = state => ({decks: state.decks})

const mapDispatchToProps = {
  fetchDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)