import {connect} from 'react-redux'
import Quiz from '../components/Quiz'

const mapStateToProps = state => ({questions: state.deck.questions})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)