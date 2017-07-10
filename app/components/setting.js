import React, {Component} from 'react'
import {
  View,
  AsyncStorage
} from 'react-native'

import QuizQuantity from './settings/quizQuantity'
import NavBar from './settings/navBar'

export default class Setting extends Component {
  constructor(props) {
    super(props)
      this.state = {
        value: ''
      }
  }

  componentDidMount() {
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      this.setState({value: result})
      console.log(result + 'hello')
    });
  }
  render() {
    return (
      <View>
        <NavBar />
        <QuizQuantity quizValue={this.state.value}/>
      </View>
    )
  }
}
