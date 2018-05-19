import {connect} from 'react-redux'
import {createDeck} from '../actions'
import CreateDeck from '../components/CreateDeck'

export default connect(null, {createDeck})(CreateDeck)