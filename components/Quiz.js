import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Card, Button} from 'react-native-elements'
import FlipCard from 'react-native-flip-card'

export default class Quiz extends Component {

  static navigationOptions = ({navigation}) => {
    return {title: `${navigation.state.params.title} Quiz`}
  }

  state = {
    score: 0,
    count: 0,
    numberOfQuestions: 0,
    question: {},
    quizDone: false
  }

  componentDidMount() {
    this.setState({
      numberOfQuestions: this.props.questions.length,
      question: this.props.questions && this.props.questions[0]
    })
  }

  correctAnswer = () => {
    let currentCount = this.state.count
    if ((currentCount + 1) < this.state.numberOfQuestions) {
      this.setState({
        score: ++this.state.score,
        count: currentCount + 1,
        question: this.props.questions[currentCount + 1]
      })
    } else {
      this.setState({
        quizDone: true,
        score: ++this.state.score
      })
    }

  }

  render() {

    if (this.state.numberOfQuestions === 0) {
      return (
        <View style={styles.msg}>
          <Text>No questions in this Deck!</Text>
        </View>
      )
    }

    if (this.state.quizDone) {
      return (
        <View style={styles.msg}>
          <Text>Your Score is {this.state.score}/{this.state.numberOfQuestions}</Text>
        </View>
      )
    }

    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.container}>

          <FlipCard
            style={styles.flipCard}
            clickable={true}
            flip={false}
            friction={10}
            perspective={1000}
            flipVertical={false}
            flipHorizontal={true}>
            <Card containerStyle={styles.face}>
              <Text>{this.state.question && this.state.question.question}
              </Text>
            </Card>

            <Card containerStyle={styles.back}>
              <Text>{this.state.question && this.state.question.answer}</Text>
            </Card>

          </FlipCard >
        </View>
        <View
          style={{
          backgroundColor: '#ccc',
          flex: 2,
          justifyContent: 'space-around'
        }}>
          <Button
            style={{
            margin: 4
          }}
            title="Correct"
            onPress={this.correctAnswer}/>
          <Button style={{
            margin: 4
          }} title="Incorrect"/>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#412312',
    justifyContent: 'center'
  },
  flipCard: {
    borderColor: 'transparent',
    width: Dimensions
      .get('window')
      .width
  },
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center'
  },
  back: {
    flex: 1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
