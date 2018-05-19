import {connect} from 'react-redux'
import {addCardToDeck, getDeck} from '../actions'
import AddCard from '../components/AddCard'

const mapStateToProps = state => ({deck: state.deck})

const mapDispatchToProps = {
  addCardToDeck,
  getDeck
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)