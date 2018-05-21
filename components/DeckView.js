import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'

export default class DeckView extends Component {

  componentDidMount() {
    const {title} = this.props.navigation.state.params
    this
      .props
      .getDeck(title)
  }

  static navigationOptions = ({navigation}) => {
    return {title: navigation.state.params.title}
  }

  render() {
    const {deck} = this.props

    if (!deck.title) 
      return (<View/>);
    
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{`${deck.questions.length} cards`}</Text>
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', {title: deck.title})}/>
        <Button
          title="Add Card"
          onPress={() => this.props.navigation.navigate('AddCard', {title: deck.title})}/>
      </View>
    )
  }
}
