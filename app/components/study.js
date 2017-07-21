 import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  AsyncStorage,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Cards from './parts/cards'
import ControlCard from './parts/controlCards'
import NavBar from './settings/navBar'
import {states} from '../json/jsonObjects'
import {listOfEnglish, listOfZomi} from '../json/jsonObjects'
// import sample from '../json/sample.js'
const {height, width} = Dimensions.get('window')
class Study extends Component {
  constructor(props){
    super(props)
    this.flip = this.flip.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
    this.state={
      english: "",
      zomi: "",
      front: true,
      index: 0,
      currentCard: [],
      height,
      width,
      animation: '',
      alignText: 'center',
      numOfstate: undefined,
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('@LOCATION', (err, result) => {
      this.setState({numOfstate: parseInt(result)})
      // console.log(result + 'locat')
    })
    this.setText()
    // this.defineCurrentCard()
  }
  nextCard() {
    this.state.front = true
    // console.log(this.state.card)
    // var i = 0
    if (this.state.currentCard[0].index == 99) {
      this.state.index = 0
    } else {
      var i = this.state.currentCard[0].index + 1
      this.state.index = i
    }
    // var i = this.state.currentCard[0].index + 1
    // console.log(i)
    // this.state.index = i
    this.setText()
    this.setState({animation: 'slideInRight'})
    // this.setState({animation: ''})

  }
  previousCard() {
    this.state.front = true
    // console.log(this.state.card)
    // var i = this.state.currentCard[0].index - 1
    // console.log(i)
    if (this.state.currentCard[0].index == 0) {
      this.state.index = 99
    } else {
      var i = this.state.currentCard[0].index - 1
      this.state.index = i
    }
    // this.state.index = i
    this.setText()
    this.setState({animation: 'slideInLeft'})
  }

  flip() {
    if (this.state.front === true) {
      this.state.front = false
    } else if (this.state.front === false) {
      this.state.front = true
    } else {}
    this.setState({textAlign: 'left'})
    this.setText()

  }
  defineCurrentCard() {
    var card = [listOfEnglish[this.state.index], listOfZomi[this.state.index]]
    this.state.currentCard = card
    // this.setState({currentCard: card})
    console.log(this.state.currentCard)
    // this.state.currentCard = card
  }
  setText() {
    this.defineCurrentCard()
    if (this.state.front === true) {
      if (this.state.index == 19) {
        answer = states[this.state.numOfstate].senate
      } else if (this.state.index == 42){
        answer = states[this.state.numOfstate].governor
      } else if (this.state.index == 43) {
        answer = states[this.state.numOfstate].city
      } else {
        answer = this.state.currentCard[0].A
      }
      question = this.state.currentCard[0].Q
      // answer = this.state.currentCard[0].A
    } else if (this.state.front === false) {
      if (this.state.index == 19) {
        answer = states[this.state.numOfstate].senate
      } else if (this.state.index == 42){
        answer = states[this.state.numOfstate].governor
      } else if (this.state.index == 43) {
        answer = states[this.state.numOfstate].city
      } else {
        answer = this.state.currentCard[1].A
      }
      question = this.state.currentCard[1].Q
    } else {}
    this.setState({question: question, answer: answer})
   console.log(this.state.front)
  }
  render() {
    return (
    <View style={{flex: 1}}>
      <NavBar />
      <View style={styles.container}>
        <View style={[styles.cardContainer, {width: this.state.width, height: this.state.height/1.5}]}>
          <View style={styles.counter}>
            <Text style={styles.counterTxt}>{this.state.index + 1}/100</Text>
          </View>
          <Animatable.View style={styles.card}
                           animation={this.state.animation}
                           duration={1000}
                           onAnimationEnd={()=>this.setState({animation: ''})}>
            <Cards flip={this.flip}
                   question={this.state.question}
                   answer={this.state.answer}
                   // alignText={this.state.alignText}
                  // zomi={this.state.zomi}
                 />
          </Animatable.View>
          <View style={styles.controlCard}>
            <ControlCard nextCard={this.nextCard.bind(this)}
                         previousCard={this.previousCard.bind(this)}/>
          </View>
        </View>

      </View>
    </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bdc3c7'
    },
    cardContainer: {
      // backgroundColor: 'red',
    },
    card: {
      flex: 6,
      backgroundColor: '#ecf0f1',
      // borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      margin: 10,
    },
    controlCard: {
      flex: 1,
      // backgroundColor: 'red'
    },
    counter: {
      backgroundColor: 'rgb(0, 102, 102)',
      borderRadius: 20,
      marginLeft: 10,
      marginBottom: 10,
      padding: 5,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterTxt: {
      color: 'white',
      fontFamily: 'Times New Roman'
    }
})

export default Study
