import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import {fetchDecks, saveDeck, addCardToDeck, removeCard} from '../actions'

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
          {this.props.decks && JSON.stringify(this.props.decks)
}
        </Text>
        <Button onPress={() => this.props.saveDeck("Udacity")} title="create card"></Button>
        <Button
          onPress={() => this.props.removeCard({
          ["title"]: "Udacity",
          ["question"]: {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          }
        })}
          title="Add Card"></Button>
      </View>
    )
  }
}

mapStateToProps = state => ({decks: state.decks})

export default connect(mapStateToProps, {fetchDecks, addCardToDeck, removeCard, saveDeck})(Decks)
