import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Text} from 'react-native-elements'

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
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text h1>{deck.title}</Text>
          <Text h4>{`${deck.questions.length} cards`}</Text>
        </View>
        <View style={styles.deckActions}>
          <Button
            title="Start Quiz"
            outline={true}
            color='#005b4f'
            onPress={() => this.props.navigation.navigate('Quiz', {title: deck.title})}/>
          <Button
            title="Add Card"
            backgroundColor='#005b4f'
            onPress={() => this.props.navigation.navigate('AddCard', {title: deck.title})}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deck: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckActions: {
    flex: 2,
    justifyContent: 'space-around'
  }
})