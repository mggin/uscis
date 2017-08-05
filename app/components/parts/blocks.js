import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native'

import ControlBlocks from './controlBlocks'
import QuitBar from './quitBar'
import Ad from '../ads/ad'
import {Actions, Scence} from 'react-native-router-flux'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'
import {listOfQuiz, checkAnswer, setQuiz, numOfRandomChoice,randomChoice, correctChoices, selectedChoices, selectedChoiceToCheck } from '../../operator/setQuiz'

const {height, width} = Dimensions.get('window')

let fontSizeOfquesTxt = 19
let fontSizeOfchoiceTxt = 17
let marginOfBox = 10
let betweenBox = 5
let fontSizeOfpopItemsTxt = 17
let widthOfpopItems = 100
let sizeOfPopUpDialog = 350
let fontSizeOfPercent = 30
let fontSizeOfProgress = 18
let fontSizeOfindexTxt = 16

if (width == 1024 || height == 1024) {
  fontSizeOfquesTxt = 29
  fontSizeOfchoiceTxt = 27
  fontSizeOfindexTxt = 25
  marginOfBox = 10
  betweenBox = 10
  fontSizeOfpopItemsTxt = 27
  widthOfpopItems =  150
  sizeOfPopUpDialog = 700
  fontSizeOfProgress = 28
  fontSizeOfPercent = 60
} else if (width == 768 || height == 768) {
  fontSizeOfquesTxt = 24
  fontSizeOfchoiceTxt = 22
  fontSizeOfindexTxt = 20
  marginOfBox = 7.5
  betweenBox = 7.5
  fontSizeOfpopItemsTxt = 22
  widthOfpopItems =  125
  sizeOfPopUpDialog = 500
  fontSizeOfProgress = 23
  fontSizeOfPercent = 45
} else {}


export default class Block extends Component{
  constructor(props) {
    super(props)
    const {width, height} = Dimensions.get('window')
    this.showQuit = this.showQuit.bind(this)
    this.dismissQuit = this.dismissQuit.bind(this)
    this.showSubmit = this.showSubmit.bind(this)
    this.dismissSubmit = this.dismissSubmit.bind(this)
    this.submit = this.submit.bind(this)
    this.state={
      height,
      width,
      index: 0,
      showNext: false,
      showBack: false,
      color1: 'white',
      color2: 'white',
      color3: 'white',
      color4: 'white',
      correctChoices: 0,
      submitBtn: false,
      layoutWidth: width,
      layoutHeight: height,
      disableBtn: false,
    }

  }
  componentDidMount() {
    this.nextAndBackShow()
    //this.props.reset()
    this.setAnswer(selectedChoices[this.props.index])
  }
  shouldComponentUpdate() {
    var update = true
    console.log('console' + listOfQuiz.length)
    if (listOfQuiz.length == 0) {
      console.log('update')
      update = false
    }
    console.log(update)
    return update
  }
  nextBlock() {
    ++this.state.index
    this.nextAndBackShow()
    this.props.nextBlock()
    this.setAnswer(selectedChoices[this.state.index])
  }
  previousBlock() {
    --this.state.index
    this.nextAndBackShow()
    this.props.previousBlock()
    this.setAnswer(selectedChoices[this.state.index])
  }
  nextAndBackShow() {
    console.log(this.state.index + 'nextAndBackShow')
    console.log(selectedChoices.length + 'selectedChoices')
    if (this.state.index == 0) {
      this.setState({showNext: true, showBack: false, submitBtn: false})
    } else if (this.state.index == selectedChoices.length-1){
      //console.log(selectedChoices.length + 'select')
      this.setState({submitBtn: true, showNext: false, showBack: true})
    } else {
      this.setState({submitBtn: false, showNext: true, showBack: true})
      // console.log('hello')
    }
    // this.setState({showNext: true, showBack: true})
    // console.log(selectedChoices.length + 'select')
  }
  submit() {
    checkAnswer(selectedChoices)
    this.setState({correctChoices: correctChoices})
    this.popupSubmit.show()
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

  showQuit(){
    this.popupQuit.show()
  }
  dismissQuit() {
    this.popupQuit.dismiss()
  }
  showSubmit() {
    this.popupSubmit.show()
  }
  dismissSubmit() {
    this.popupSubmit.dismiss()
  }
  restart() {
    this.state.index = 0
    this.setState({showNext: false, showBack: false, submitBtn: false})
    this.nextAndBackShow()
    this.dismissQuit()
    this.props.reset()
    this.setAnswer()
  }
  retake() {
    this.state.index = 0
    this.setState({showNext: false, showBack: false, submitBtn: false})
    this.nextAndBackShow()
    this.dismissSubmit()
    this.props.reset()
    this.setAnswer()
  }
  quitBtn() {
    //this.restartBtn()
    console.log(this.state.index + 'index')
    Actions.menu({type: 'back'})
  }
  layoutChanged() {
    const {width, height} = Dimensions.get('window')
    if (width > height) {
      this.setState({
        layoutWidth: width,
        layoutHeight: width,
      })
    } else {
      this.setState({
        layoutWidth: width,
        layoutHeight: height,
      })
    }
  }

  render() {
    randomChoice()
    //console.log(this.props.quiz.C3)
    let index = this.state.index + 1 // to show question number
    let quiz = this.props.quiz.Q //
    const choices = [this.props.quiz.C1, this.props.quiz.C2, this.props.quiz.C3, this.props.quiz.C4]

    const randomChoices = [] // hold the arrary of randomChoices for answer
    for (let i = 0; i < choices.length; i++) {
      randomChoices.push(choices[numOfRandomChoice[i]])
    }
    // console.log(numOfRandomChoice)


    return (
      <View style={styles.container} onLayout={() => this.layoutChanged()}>
        <View style={{flex: 1}}>

          <QuitBar show={this.showQuit} dismiss={this.dismissQuit} disableBtn={this.state.disableBtn}/>
          <ScrollView style={{width: this.state.layoutWidth, height: this.state.layoutHeight}}>
            <View style={styles.blockContainer}>
              <View style={{margin: marginOfBox, padding: 5}}>
                <Text style={styles.indexTxt}>Question {index} of {selectedChoices.length}</Text>
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
            <ControlBlocks nextBtn={this.state.showNext} backBtn={this.state.showBack} submit={this.submit}
                           submitBtn={this.state.submitBtn}
                           nextBlock={this.nextBlock.bind(this)} previousBlock={this.previousBlock.bind(this)}/>

            <PopupDialog width={300} height={300}
                        // dialogTitle={<DialogTitle title="EXIT" />}
                        dialogStyle={styles.dialogStyle}
                       //dismissOnTouchOutside={false}
                        // onDismissed={() => console.log('dismiss')}
                        //onShown={() => console.log('show')}
                       //haveOverlay={false}
                       overlayOpacity={0.7}
                       ref={(popupDialog) => {this.popupQuit = popupDialog}}>
                        <View style={styles.popBox}>
                          <TouchableOpacity style={styles.popItems}
                                            activeOpacity={0.6}
                                            onPress={() => this.restart()}>
                            <Text style={styles.popItemsTxt}>RESTART</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.popItems}
                                            activeOpacity={0.6}
                                            onPress={() => this.quitBtn()}>
                            <Text style={styles.popItemsTxt}>QUIT</Text>
                          </TouchableOpacity>
                        </View>
          </PopupDialog>
          <PopupDialog width={sizeOfPopUpDialog} height={sizeOfPopUpDialog}
                      // dialogTitle={<DialogTitle title="EXIT" />}
                      dialogStyle={styles.progressView}
                     dismissOnTouchOutside={false}
                     onDismissed={() => this.setState({disableBtn: false})}
                     onShown={() => this.setState({disableBtn: true})}
                     //haveOverlay={false}
                     overlayOpacity={0.7}
                     ref={(popupDialog) => {this.popupSubmit = popupDialog}}>
                     <View style={styles.popBox}>
                       <Text style={styles.progress}>You answered {this.state.correctChoices} of {selectedChoices.length} questions correctly</Text>
                       <Text style={styles.percent}>SCORE</Text>
                       <Text style={styles.percent}>{this.state.correctChoices/selectedChoices.length * 100}%</Text>
                     </View>
                      <View style={styles.popBox}>
                        <TouchableOpacity style={styles.popItems}
                                          activeOpacity={0.6}
                                          onPress={() => this.retake()}>
                          <Text style={styles.popItemsTxt}>RETAKE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.popItems}
                                          activeOpacity={0.6}
                                          onPress={() => this.quitBtn()}>
                          <Text style={styles.popItemsTxt}>MENU</Text>
                        </TouchableOpacity>
                      </View>
        </PopupDialog>
       <Ad />
      </ScrollView>

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
   marginLeft: marginOfBox,
   marginRight: marginOfBox,
   marginBottom: 10,
   borderRadius: 5,
   // borderWidth: StyleSheet.hairlineWidth,
   // backgroundColor: '#3498db'
 },
 quesTxt: {
   textAlign: 'left',
   fontSize: fontSizeOfquesTxt,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 box: {
   padding: 15,
   marginLeft: marginOfBox,
   marginRight: marginOfBox,
   marginBottom: betweenBox,
   marginTop: betweenBox,
   borderRadius: 5,
   borderWidth: StyleSheet.hairlineWidth,
 },
 choiceTxt: {
   textAlign: 'left',
   fontSize: fontSizeOfchoiceTxt,
   color: '#2c3e50',
   fontFamily: 'Times New Roman'
 },
 indexTxt: {
   textAlign: 'left',
   fontSize: fontSizeOfindexTxt,
   opacity: 0.9,
   color: '#34495e',
   fontFamily: 'Times New Roman',
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
   width: widthOfpopItems,
   height: widthOfpopItems/2,
   borderWidth: StyleSheet.hairlineWidth,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 50,
   borderColor: 'rgb(102, 0, 51)',
   padding: 10,
   margin: 10,
   backgroundColor: 'white'
 },
 popItemsTxt: {
   textAlign: 'center',
   fontFamily: 'Optima',
   fontSize: fontSizeOfpopItemsTxt,
   color: 'rgb(102, 0, 51)'
 },
 progressView: {
   borderRadius: 10,
   backgroundColor: 'rgb(102, 0, 51)'
 },
 progress: {
   color: 'white',
   fontSize: fontSizeOfProgress,
   fontFamily: 'Times New Roman',
   marginBottom: 15,
   marginTop: 20
 },
 percent: {
   color: 'white',
   fontFamily: 'Optima-Bold',
   fontSize: fontSizeOfPercent,
   // padding: 10,
   // margin: 10

 }
})
