import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {FormInput, Button, Card, FormLabel, FormValidationMessage} from 'react-native-elements';

export default class CreateDeck extends Component {

  state = {
    title: '',
    error: ''
  }

  createDeck = () => {
    if (!this.state.title) {
      this.setState({error: 'Required field'})
      return
    }
    this
      .props
      .createDeck(this.state.title)

    this
      .props
      .navigation
      .goBack()

  }

  render() {
    return (
      <View>
        <Card>
          <FormLabel>Title of your new Deck</FormLabel>
          <FormInput
            placeholder="Deck title"
            onChangeText={(title) => this.setState({title})}/>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <Button title='Create Deck' onPress={this.createDeck}/>
        </Card>
      </View>
    )
  }
}