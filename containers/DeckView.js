import {connect} from 'react-redux'
import {getDeck} from '../actions'
import DeckView from '../components/DeckView'

const mapStateToProps = state => {
  return ({deck: state.deck})
}

const mapDispatchToProps = {
  getDeck
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckView)