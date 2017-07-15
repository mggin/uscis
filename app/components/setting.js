import React, {Component} from 'react'
import {
  View,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Picker,
  StyleSheet,
  StatusBar,
} from 'react-native'

// import QuizQuantity from './settings/quizQuantity'
// import Location from './settings/location'
import NavBar from './settings/navBar'
import {states} from '../json/jsonObjects'
import Icon from 'react-native-vector-icons/Ionicons'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'

export default class Setting extends Component {
  constructor(props) {
    super(props)
      this.state = {
        valueOfQuiz: '25',
        valueOfLocation: 'Oklahoma',
        active: false,
      }
  }

  componentWillMount() {
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      this.setState({valueOfQuiz: result})
    })
    AsyncStorage.getItem('@LOCATION', (err, result) => {
      this.setState({valueOfLocation: result})
    })

    // console.log(this.state.valueOfLocation)
  }

  setQuantity() {
    // this.setState({active: false})
    console.log(this.state.valueOfQuiz)
    try {
      AsyncStorage.setItem('@QU1Z', this.state.valueOfQuiz);
      AsyncStorage.setItem('@LOCATION', this.state.valueOfLocation);
    } catch (error) {
   // Error saving data
    }
    AsyncStorage.getItem('@LOCATION', (err, result) => {
      console.log(result)
    })
  }
  _locationDismissed(){
    this.setState({active: false})
    this.popupOfLocation.dismiss()
  }
  _quizDismissed() {
    this.setState({active: false})
    this.popupOfQuiz.dismiss()
  }

  render() {
    const listOfpickerStates = []
    for (let num = 0; num < states.length; num++) {
      let singleState = <Picker.Item label={states[num].name} value= {states[num].name}/>
      listOfpickerStates.push(singleState)
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <NavBar />
        <PopupDialog dialogTitle={<DialogTitle title="SET LOCATION" />}
                     width={300}
                     dialogStyle={styles.dialogStyle}
                     onDismissed={this.setQuantity()}
                     onShown={() => this.setState({active: true})}
                     //haveOverlay={false}
                     //overlayOpacity={0.3}
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
                     width={300}
                     dialogStyle={styles.dialogStyle}
                     onDismissed={() => this.setQuantity()}
                     onShown={() => this.setState({active: true})}
                     //haveOverlay={false}
                     //overlayOpacity={0.3}
                     ref={(popupDialog) => { this.popupOfQuiz = popupDialog}}>
                     <Picker selectedValue={this.state.valueOfQuiz}
                             style={styles.picker}
                             onValueChange={(itemValue, itemIndex) => this.setState({valueOfQuiz: itemValue})}>
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
          <Icon name="ios-paper" size={35} color="rgb(0, 102, 102)" />
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
          <Icon name="ios-pin" size={35} color="rgb(0, 102, 102)" />
          </View>
          <Text style={styles.txtDesign}>SET LOCATION</Text>
          <View style={styles.valueBox}>
            <Text style={styles.value}>{this.state.valueOfLocation}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  settingItems: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    marginLeft: 4,
  },
  picker: {
    flex: 3,
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
    fontSize: 16,
    color: '#ecf0f1',
    fontFamily: 'Gill Sans'
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
    flex: 4,
    fontSize: 17,
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
    textAlign: 'right'
    // fontFamily: 'Times New Roman'


  }

})
