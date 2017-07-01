import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Cards from './parts/cards'
import ControlCard from './parts/controlCards'
import {listOfEnglish, listOfZomi} from '../json/jsonObjects'
// import sample from '../json/sample.js'

class Study extends Component {
  constructor(props){
    super(props)
    this.flip = this.flip.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
    var {height, width} = Dimensions.get('window')
    this.state={
      english: "",
      zomi: "",
      front: true,
      index: 0,
      currentCard: [],
      height,
      width,
      animation: ''
    }
  }
  componentDidMount() {
    this.setText()
    // this.defineCurrentCard()
  }
  nextCard() {
    this.state.front = true
    // console.log(this.state.card)
    var i = this.state.currentCard[0].index + 1
    console.log(i)
    this.state.index = i
    this.setText()
    this.setState({animation: 'slideInRight'})
    // this.setState({animation: ''})

  }
  previousCard() {
    this.state.front = true
    // console.log(this.state.card)
    var i = this.state.currentCard[0].index - 1
    console.log(i)
    this.state.index = i
    this.setText()
    this.setState({animation: 'slideInLeft'})
  }

  flip() {
    if (this.state.front === true) {
      this.state.front = false
    } else if (this.state.front === false) {
      this.state.front = true
    } else {}
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
      zomi = this.state.currentCard[1].Q
      english = this.state.currentCard[0].Q
    } else if (this.state.front === false) {
      zomi = this.state.currentCard[1].A
      english = this.state.currentCard[0].A
    } else {}
    this.setState({english: english, zomi: zomi})
   console.log(this.state.front)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.cardContainer, {width: this.state.width, height: this.state.height/1.5}]}>
          <Animatable.View style={styles.card}
                           animation={this.state.animation}
                           duration={1000}
                           onAnimationEnd={()=>this.setState({animation: ''})}>
            <Cards flip={this.flip.bind(this)}
                   english={this.state.english}
                   zomi={this.state.zomi}/>
          </Animatable.View>
          <View style={styles.controlCard}>
            <ControlCard nextCard={this.nextCard.bind(this)}
                         previousCard={this.previousCard.bind(this)}/>
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
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      margin: 10,
    },
    controlCard: {
      flex: 1,
      // backgroundColor: 'red'
    }
})

export default Study
