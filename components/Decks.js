import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {fetchDecks} from '../actions'

class Decks extends Component {

  componentDidMount() {
    this
      .props
      .fetchDecks();
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.decks && JSON.stringify(this.props.decks)}
        </Text>
      </View>
    )
  }
}

mapStateToProps = state => ({decks: state.decks})

export default connect(mapStateToProps, {fetchDecks})(Decks)