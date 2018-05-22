import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Card, Button} from 'react-native-elements'
import FlipCard from 'react-native-flip-card'
import {clearLocalNotification, setLocalNotification} from '../utils/notification'

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

  inCorrectAnswer = () => {
    let currentCount = this.state.count
    if ((currentCount + 1) < this.state.numberOfQuestions) {
      this.setState({
        count: currentCount + 1,
        question: this.props.questions[currentCount + 1]
      })
    } else {
      this.setState({quizDone: true})
    }
  }

  render() {

    if (this.state.numberOfQuestions === 0) {
      return (
        <View style={styles.msg}>
          <Text>No questions in this Deck!</Text>
          <Button
            title="Go home"
            backgroundColor='#005b4f'
            onPress={() => this.props.navigation.navigate('Decks')}/>
        </View>
      )
    }

    if (this.state.quizDone) {
      // Don't show notification when the quiz is done for the day
      clearLocalNotification().then(setLocalNotification)

      return (
        <View style={styles.msg}>
          <Text>Your Score is {this.state.score}/{this.state.numberOfQuestions}</Text>
          <Button
            title="Go home"
            backgroundColor='#005b4f'
            onPress={() => this.props.navigation.navigate('Decks')}/>
        </View>
      )
    }

    return (
      <View style={{
        flex: 1
      }}>
        <Text style={styles.questionCount}>{this.state.count + 1}
          / {this.state.numberOfQuestions}
        </Text>
        <View style={styles.container}>

          <FlipCard
            style={styles.flipCard}
            clickable={true}
            flip={false}
            friction={10}
            perspective={1000}
            flipVertical={false}
            flipHorizontal={true}>
            <Card containerStyle={styles.question}>
              <Text>{this.state.question && this.state.question.question}
              </Text>
            </Card>

            <Card containerStyle={styles.answer}>
              <Text>{this.state.question && this.state.question.answer}</Text>
            </Card>

          </FlipCard >
        </View>
        <View
          style={{
          flex: 2,
          justifyContent: 'space-around'
        }}>
          <Button
            title="Correct"
            outline={true}
            color='#005b4f'
            onPress={this.correctAnswer}/>
          <Button
            backgroundColor='#005b4f'
            title="Incorrect"
            onPress={this.inCorrectAnswer}/>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flipCard: {
    borderColor: 'transparent',
    width: Dimensions
      .get('window')
      .width
  },
  question: {
    flex: 1,
    backgroundColor: '#4ebaaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  answer: {
    flex: 1,
    backgroundColor: '#ffc046',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msg: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  questionCount: {
    alignSelf: 'flex-start',
    padding: 1
  }
});
