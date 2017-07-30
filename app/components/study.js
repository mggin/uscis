 import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  AsyncStorage,
  StatusBar,
  Slider,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Cards from './parts/cards'
import ControlCard from './parts/controlCards'
import NavBar from './settings/navBar'
import {states} from '../json/jsonObjects'
import {listOfEnglish, listOfZomi} from '../json/jsonObjects'
// import sample from '../json/sample.js'
const {width, height} = Dimensions.get('window')

let fontSizeOfcounterTxt = 16
if (width == 1024) {
  fontSizeOfcounterTxt = 26
}
class Study extends Component {
  constructor(props){
    super(props)
    this.flip = this.flip.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
    this.sliderComplete = this.sliderComplete.bind(this)
    this.sliderValueChange = this.sliderValueChange.bind(this)
    this.state={
      height,
      width,
      front: true,
      index: 0,
      cardNum: 0,
      currentCard: [],
      animation: '',
      numOfstate: undefined,
      sliderValue: 0,
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('@LOCATION', (err, result) => {
      this.setState({numOfstate: parseInt(result)})
    })
    this.setText()
  }
  /* nextCard defines the question what come after the
  current question. It has the same functionality as
  previousCard does but a few implemention would be
  different */
  nextCard() {
    this.state.front = true
    if (this.state.currentCard[0].index == 99) {
      this.state.index = 0
      this.state.sliderValue = 0
    } else {
      var i = this.state.currentCard[0].index + 1
      this.state.index = i
      this.state.sliderValue += 1
    }
    this.setText()
    this.setState({animation: 'slideInRight'})

  }
  previousCard() {
    this.state.front = true
    if (this.state.currentCard[0].index == 0) {
      this.state.index = 99
      this.state.sliderValue = 99
    } else {
      var i = this.state.currentCard[0].index - 1
      this.state.index = i
        this.state.sliderValue -= 1
    }
    this.setText()
    this.setState({animation: 'slideInLeft'})
  }

/* flip switches the english to zomi */
  flip() {
    if (this.state.front === true) {
      this.state.front = false
    } else if (this.state.front === false) {
      this.state.front = true
    } else {}
    // this.setState({textAlign: 'left'})
    this.setText()

  }

  defineCurrentCard() {
    var card = [listOfEnglish[this.state.index], listOfZomi[this.state.index]]
    this.state.currentCard = card
    // console.log(this.state.currentCard)
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
    // console.log(this.state.front)
  }
  sliderComplete(value) {
     // this.setState({index: value})
     // this.setText()
     this.state.sliderValue = value
     this.state.front = false
     this.flip()
     console.log(this.state.sliderValue)
     //this.setText()
  }
  sliderValueChange(value) {
    //this.state.index = value
    //this.state.cardNum = value
    //this.state.sliderValue = value
    this.setState({index: value})
    this.state.front = false
    this.flip()
    //console.log(this.state.sliderValue)
    //this.state.s
  }
  render() {
    var cardNum = this.state.cardNum
    return (
    <View style={{flex: 1, backgroundColor: '#bdc3c7'}}>
      <StatusBar barStyle="light-content"/>
      <NavBar />
      <View style={styles.container}>
        <View style={[styles.cardContainer, {width: this.state.width, height: this.state.height/1.4}]}>
          <View style={{flexDirection: 'row', margin: 10, flex: 0.7}}>
          <View style={styles.counter}>
            <Text style={styles.counterTxt}>{this.state.index + 1}/100</Text>
          </View>
          <View style={styles.slider}>
            <Slider minimumTrackTintColor="rgb(0, 102, 102)"
                    step={1}
                    maximumValue={99}
                    minimumValue={0}
                    style={styles.sliderSty}
                    value={this.state.sliderValue}
                    // disabled={true}
                    //thumbImage={require('../assets/thumb.png')}
                    // trackImage={require('../assets/track.png')}
                    onValueChange={this.sliderValueChange}
                    onSlidingComplete={this.sliderComplete}
                  />
          </View>
          </View>
          <Animatable.View style={styles.card}
                           animation={this.state.animation}
                           duration={1000}
                           onAnimationEnd={()=>this.setState({animation: ''})}>
            <Cards flip={this.flip}
                   question={this.state.question}
                   answer={this.state.answer}
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
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bdc3c7'
    },
    cardContainer: {
      flex: 1,
      // backgroundColor: 'red',
    },
    card: {
      flex: 6,
      backgroundColor: '#ecf0f1',
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#7f8c8d',
      margin: 10,
    },
    controlCard: {
      marginTop: 10,
      flex: 1,
    },
    counter: {
      flex: 0.8,
      backgroundColor: 'transparent',
      borderRadius: 70,
      marginLeft: 10,
      marginBottom: 5,
      padding: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgb(0, 102, 102)'
    },
    counterTxt: {
      fontSize: fontSizeOfcounterTxt,
      color: 'rgb(0, 102, 102)',
      fontFamily: 'Times New Roman',
    },
    slider: {
      flex: 4,
      alignSelf: 'center',
      marginLeft: 10,
      marginRight: 10,
      //marginBottom: 5,
    },
    sliderSty: {
      // borderColor: 'red'
    }
})

export default Study
