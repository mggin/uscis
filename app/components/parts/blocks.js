import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

import ControlBlocks from './controlBlocks'
import QuitBar from './quitBar'
import {Actions, Scence} from 'react-native-router-flux'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'
import {setQuiz, numOfRandomChoice,randomChoice, selectedChoices, selectedChoiceToCheck } from '../../operator/setQuiz'

const {height, width} = Dimensions.get('window')
export default class Block extends Component{
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
    this.dismiss = this.dismiss.bind(this)
    this.state={
      height,
      width,
      index: 0,
      color1: 'white',
      color2: 'white',
      color3: 'white',
      color4: 'white'
    }

  }
  componentDidMount() {
    this.setAnswer(selectedChoices[this.props.index])
  }
  nextBlock() {
    this.props.nextBlock()
    ++this.state.index
    this.setAnswer(selectedChoices[this.state.index])
  }
  previousBlock() {
    this.props.previousBlock()
    --this.state.index
    this.setAnswer(selectedChoices[this.state.index])
  }
  /* setAnswer takes user choices and change the color
  of choic boxes into different color */
  setAnswer(choiceShort, choiceLong) {
    if (choiceShort === 'C1') {
      this.setState({color1: '#3498db', color2: 'white', color3: 'white', color4: 'white'})
      this.props.onSelect(this.state.index, choiceShort, choiceLong)
    } else if (choiceShort === 'C2') {
      this.setState({color1: 'white', color2: '#3498db', color3: 'white', color4: 'white'})
      this.props.onSelect(this.state.index, choiceShort, choiceLong)
    } else if (choiceShort === 'C3') {
      this.setState({color1: 'white', color2: 'white', color3: '#3498db', color4: 'white'})
      this.props.onSelect(this.state.index, choiceShort, choiceLong)
    } else if (choiceShort === 'C4') {
      this.setState({color1: 'white', color2: 'white', color3: 'white', color4: '#3498db'})
      this.props.onSelect(this.state.index, choiceShort, choiceLong)
    } else {
      this.setState({color1: 'white', color2: 'white', color3: 'white', color4: 'white'})
    }
  }

  show(){
    this.popupQuit.show()
  }
  dismiss() {
    this.popupQuit.dismiss()
  }
  restartBtn() {
    this.dismiss()
    this.props.reset()
    this.setAnswer()
  }
  quitBtn() {
    this.show()
    Actions.menu({type: 'back'})
  }

  render() {
    randomChoice()
    //console.log(this.props.quiz.C3)
    let index = this.props.index + 1 // to show question number
    let quiz = this.props.quiz.Q //
    const choices = [this.props.quiz.C1, this.props.quiz.C2, this.props.quiz.C3, this.props.quiz.C4]

    const randomChoices = [] // hold the arrary of randomChoices for answer
    for (let i = 0; i < choices.length; i++) {
      randomChoices.push(choices[numOfRandomChoice[i]])
    }
    console.log(numOfRandomChoice)

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>

          <QuitBar show={this.show} dismiss={this.dismiss}/>
            <View style={styles.blockContainer}>
              <View style={{margin: 5, padding: 5}}>
                <Text style={styles.indexTxt}>QUESTION {index}</Text>
              </View>
              <View style={styles.ques}>
                <Text style={styles.quesTxt}>{quiz}</Text>
              </View>
              <View style={[styles.box, {backgroundColor: this.state.color1}]}>
                <TouchableOpacity onPress={() => this.setAnswer('C1',randomChoices[0] )}>
                  <Text style={styles.choiceTxt}>{randomChoices[0]}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.box, {backgroundColor: this.state.color2}]}>
                <TouchableOpacity onPress={() => this.setAnswer('C2', randomChoices[1])}>
                  <Text style={styles.choiceTxt}>{randomChoices[1]}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.box, {backgroundColor: this.state.color3}]}>
                <TouchableOpacity onPress={() => this.setAnswer('C3', randomChoices[2])}>
                  <Text style={styles.choiceTxt}>{randomChoices[2]}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.box, {backgroundColor: this.state.color4}]}>
                <TouchableOpacity onPress={() => this.setAnswer('C4', randomChoices[3])}>
                  <Text style={styles.choiceTxt}>{randomChoices[3]}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ControlBlocks nextBlock={this.nextBlock.bind(this)} previousBlock={this.previousBlock.bind(this)}/>
            <PopupDialog width={120} height={70}
                        // dialogTitle={<DialogTitle title="EXIT" />}
                        dialogStyle={styles.dialogStyle}
                       //dismissOnTouchOutside={false}
                       onDismissed={() => console.log('dismiss')}
                       onShown={() => console.log('show')}
                       //haveOverlay={false}
                       //overlayOpacity={0.3}
                       ref={(popupDialog) => {this.popupQuit = popupDialog}}>
                        <View style={styles.popBox}>
                          <TouchableOpacity style={styles.popItems}
                                            activeOpacity={0.6}
                                            onPress={() => this.restartBtn()}>
                            <Text style={styles.popItemsTxt}>RESTART</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.popItems}
                                            activeOpacity={0.6}
                                            onPress={() => this.quitBtn()}>
                            <Text style={styles.popItemsTxt}>QUIT</Text>
                          </TouchableOpacity>
                        </View>
          </PopupDialog>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
 container: {
   flex: 1,
   borderRadius: 5,
   backgroundColor: '#ecf0f1'
 },
 ques: {
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 10,
   borderRadius: 5,
   // borderWidth: StyleSheet.hairlineWidth,
   // backgroundColor: '#3498db'
 },
 quesTxt: {
   textAlign: 'left',
   fontSize: 19,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 box: {
   padding: 15,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 5,
   marginTop: 5,
   borderRadius: 5,
   borderWidth: StyleSheet.hairlineWidth,
 },
 choiceTxt: {
   textAlign: 'left',
   fontSize: 17,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 indexTxt: {
   textAlign: 'left',
   fontSize: 14,
   opacity: 0.9,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 blockContainer: {
   flex: 1,
 },
 dialogStyle: {
   borderRadius: 0,
   backgroundColor: 'transparent'
 },
 popBox: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 popItems: {
   width: 100,
   borderWidth: StyleSheet.hairlineWidth,
   borderRadius: 50,
   padding: 10,
   margin: 10,
  backgroundColor: 'white'
 },
 popItemsTxt: {
   textAlign: 'center',
   fontFamily: 'Gill Sans',
   fontSize: 17,
   // color: 'white'
 }
})
