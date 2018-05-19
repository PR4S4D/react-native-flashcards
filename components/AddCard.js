import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {FormInput, Button, Card, FormLabel, FormValidationMessage} from 'react-native-elements';

export default class AddCard extends Component {

  static navigationOptions = ({deck}) => {
    if (deck) 
      return {title: deck.title}
    }

  componentDidMount() {
    this
      .props
      .getDeck(this.props.deck.title)
  }

  state = {
    question: '',
    answer: '',
    error: ''
  }

  addCard = () => {
    if (!this.state.answer || !this.state.question) {
      this.setState({error: 'Required field'})
      return
    }

    let deck = {
      title: this.props.deck.title,
      question: {
        question: this.state.question,
        answer: this.state.answer
      }
    }

    this
      .props
      .addCardToDeck(deck)

    this
      .props
      .navigation
      .navigate('DeckView', {'title': deck.title})

  }

  render() {
    console.log(this.state)
    return (
      <View>
        <FormLabel>Question</FormLabel>
        <FormInput
          placeholder="Question"
          onChangeText={question => this.setState({question})}/>
        <FormValidationMessage>{!this.state.question && this.state.error}</FormValidationMessage>
        <FormLabel>Answer</FormLabel>
        <FormInput
          placeholder="Answer"
          onChangeText={answer => this.setState({answer})}/>
        <FormValidationMessage>{!this.state.answer && this.state.error}</FormValidationMessage>

        <Button title='Add Card' onPress={this.addCard}/>

      </View>
    )
  }
}
