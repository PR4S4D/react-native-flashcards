import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Card, ListItem} from 'react-native-elements'

export default class Decks extends Component {

  componentDidMount() {
    this
      .props
      .fetchDecks()
  }

  render() {
    const decks = Object.values(this.props.decks)
    return (
      <View>
        {decks.map(deck => (<ListItem
          key={deck.title}
          title={deck.title}
          subtitle={`${deck.questions.length} cards`}/>))}
      </View>
    )
  }
}
