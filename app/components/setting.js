import React, {Component} from 'react'
import {
  View,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Picker,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native'

import NavBar from './settings/navBar'
import {states} from '../json/jsonObjects'
import Icon from 'react-native-vector-icons/Ionicons'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'

const {width, height}  = Dimensions.get('window')

let marginLeftOfItem = 4
let iconSize = 35
let txtDialogFontSize = 16
let textDesingfontSize = 15
let heightOfItem = 60
let fontSizeOfvalue = 16
let popupDialogSize = 300
let flexOfPicker = 3

if (width == 1366 || height == 1366) {
  marginLeftOfItem = 20
  iconSize = 60
  textDesingfontSize = 25
  heightOfItem = 100
  fontSizeOfvalue = 20
  popupDialogSize = 600
  flexOfPicker = 6
  // txtDialogFontSize = 20
} else if (width == 768 || height == 768) {
  marginLeftOfItem = 10
  iconSize = 50
  textDesingfontSize = 22
  heightOfItem = 80
  fontSizeOfvalue = 18
  popupDialogSize = 450
  flexOfPicker = 4
} else {}
export default class Setting extends Component {
  constructor(props) {
    super(props)
      this.state = {
        valueOfQuiz: '10',
        valueOfLocation: 35,
        active: false,
      }
  }

  componentWillMount() {
    //setQuantity() need called before AsyncStorage.getItem()
    //This is why setting.js got crashed
    this.setQuantity()
  }

  componentDidMount() {
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      this.setState({valueOfQuiz: result})
    })
    AsyncStorage.getItem('@LOCATION', (err, result) => {
      this.setState({valueOfLocation: parseInt(result)})
      // console.log(result + 'locat')
    })
  }

  setQuantity() {
    // this.setState({active: false})
    console.log(this.state.valueOfQuiz)
    try {
      AsyncStorage.setItem('@QU1Z', this.state.valueOfQuiz);
      AsyncStorage.setItem('@LOCATION', this.state.valueOfLocation.toString());
    } catch (error) {
   // Error saving data
    }
  }
  _locationDismissed(){
    this.setState({active: false})
    this.popupOfLocation.dismiss()
    this.setQuantity()
  }
  _quizDismissed() {
    this.setState({active: false})
    this.popupOfQuiz.dismiss()
    this.setQuantity()
  }

  render() {
    const listOfpickerStates = []
    for (let num = 0; num < states.length; num++) {
      let singleState = <Picker.Item label={states[num].name} value= {num}/>
      listOfpickerStates.push(singleState)
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <NavBar />
        <PopupDialog dialogTitle={<DialogTitle title="SET LOCATION" />}
                     width={popupDialogSize}
                     height={popupDialogSize}
                     dialogStyle={styles.dialogStyle}
                     // onDismissed={this.setQuantity()}
                     onShown={() => this.setState({active: true})}
                     //haveOverlay={false}
                     dismissOnTouchOutside={false}
                     overlayOpacity={0.6}
                     ref={(popupDialog) => { this.popupOfLocation = popupDialog}}>
                     <Picker selectedValue={this.state.valueOfLocation}
                             style={styles.picker}
                             onValueChange={(itemValue, itemIndex) => this.setState({valueOfLocation: itemValue})}>
                             {listOfpickerStates}
                     </Picker>
            <TouchableOpacity style={styles.dialogContainer}
                              activeOpacity={0.7}
                              onPress={() => this._locationDismissed()}>
              <Text style={styles.txtDialog}>CLOSE</Text>
            </TouchableOpacity>
        </PopupDialog>
        <PopupDialog dialogTitle={<DialogTitle title="SET QUESTION" />}
                     width={popupDialogSize}
                     height={popupDialogSize}
                     dialogStyle={styles.dialogStyle}
                     // onDismissed={() => this.setQuantity()}
                     onShown={() => this.setState({active: true})}
                     //haveOverlay={false}
                     overlayOpacity={0.6}
                     dismissOnTouchOutside={false}
                     ref={(popupDialog) => { this.popupOfQuiz = popupDialog}}>
                     <Picker selectedValue={this.state.valueOfQuiz}
                             style={styles.picker}
                             onValueChange={(itemValue, itemIndex) => this.setState({valueOfQuiz: itemValue})}>
                             <Picker.Item label="10" value="10" />
                             <Picker.Item label="25" value="25" />
                             <Picker.Item label="50" value="50" />
                     </Picker>
            <TouchableOpacity style={styles.dialogContainer}
                              activeOpacity={0.7}
                              onPress={() => this._quizDismissed()}>
              <Text style={styles.txtDialog}>CLOSE</Text>
            </TouchableOpacity>
        </PopupDialog>
        <TouchableOpacity  style={styles.settingItems}
                           disabled={this.state.active}
                           activeOpacity={0.6}
                           onPress={() => this.popupOfQuiz.show()}>
          <View style={styles.icon}>
          <Icon name="ios-paper" size={iconSize} color="rgb(0, 102, 102)" />
          </View>
          <Text style={styles.txtDesign}>ASSIGN QUESTION</Text>
          <View style={styles.valueBox}>
            <Text style={styles.value}>{this.state.valueOfQuiz}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.settingItems}
                           disabled={this.state.active}
                           activeOpacity={0.6}
                           onPress={() => this.popupOfLocation.show()}>
          <View style={styles.icon}>
          <Icon name="ios-pin" size={iconSize} color="rgb(0, 102, 102)" />
          </View>
          <Text style={styles.txtDesign}>SET LOCATION</Text>
          <View style={styles.valueBox}>
            <Text style={styles.value}>{states[this.state.valueOfLocation].name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  settingItems: {
    height: heightOfItem,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    marginLeft: marginLeftOfItem,
  },
  picker: {
    flex: flexOfPicker,

    // alignSelf: 'center',
    // fontFamily: 'Trebuchet MS',
  },
  dialogStyle: {
    borderRadius: 11,
  },
  dialogContainer: {
    flex: 1,
    //borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 102, 102)',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  txtDialog: {
    fontSize: txtDialogFontSize,
    color: '#ecf0f1',
    fontFamily: 'Trebuchet MS',
  },
  icon: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  txtDesign: {
    fontFamily: 'Trebuchet MS',
    flex: 4,
    fontSize: textDesingfontSize,
    color: '#2c3e50'
  },
  valueBox: {
    flexGrow: 1,
    borderRadius: 5,
    padding: 5,
    // borderWidth: 0.3,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(0, 102, 102)',
    opacity: 0.8
  },
  value: {
    color: '#2c3e50',
    textAlign: 'right',
    fontFamily: 'Trebuchet MS',
    fontSize: fontSizeOfvalue,
    // fontFamily: 'Times New Roman'


  }

})
