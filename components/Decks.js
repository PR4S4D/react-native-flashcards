import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Card, ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default class Decks extends Component {

  componentDidMount() {
    this
      .props
      .fetchDecks()
  }

  render() {
    const decks = Object.values(this.props.decks)
    const {navigate} = this.props.navigation
    return (
      <View style={{
        flex: 1
      }}>
        {decks.map(deck => (<ListItem
          key={deck.title}
          title={deck.title}
          onPress={() => this.props.navigation.navigate('DeckView', {'title': deck.title})}
          subtitle={`${deck.questions.length} cards`}/>))}
        <ActionButton
          offsetX={15}
          offsetY={15}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => navigate('CreateDeck')}/>

      </View>
    )
  }
}
