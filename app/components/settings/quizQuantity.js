import React, {Component} from 'react'
import {
  View,
  Text,
  AsyncStorage,
  Picker,
  Dimensions,
  StyleSheet,
  alert,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import PopupDialog, { DialogTitle, SlideAnimation, DialogButton} from 'react-native-popup-dialog'

const {width, height} = Dimensions.get('window')

export default class QuizQuantity extends Component {
  constructor() {
    super()
    this.state = {
      value: '25',
      modalVisible: false
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('@QU1Z', (err, result) => {
      this.setState({value: result})
    })
    console.log('run')
  }
  setQuantity() {
    try {
      AsyncStorage.setItem('@QU1Z', this.state.value);
    } catch (error) {
   // Error saving data
    }
    console.log('setQuantity')
  }
  _showDialog() {
    this.popupDialog.show()
  }
  render() {
    return (
      <View style={styles.main}>
          <PopupDialog dialogTitle={<DialogTitle title="Dialog Title" />}
                       width={300}
                       dialogStyle={styles.dialogStyle}
                       onDismissed={this.setQuantity()}
                       //haveOverlay={false}
                       //overlayOpacity={0.3}
                       ref={(popupDialog) => { this.popupDialog = popupDialog}}>
                       <Picker selectedValue={this.state.value}
                               style={styles.picker}
                               onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}>
                               <Picker.Item label="25" value='25' />
                               <Picker.Item label="50" value='50' />
                       </Picker>
              <TouchableOpacity style={styles.txtContainer}
                                activeOpacity={0.7}
                                  onPress={() => this.popupDialog.dismiss()}>
                <Text style={styles.txtSty}>CLOSE</Text>
              </TouchableOpacity>
          </PopupDialog>
          <TouchableOpacity  style={styles.container}
            onPress={() => this.popupDialog.show()}>
            <Text>ASSIGN QUESTION</Text>
          </TouchableOpacity>
        </View>

    )
  }
}

const styles=StyleSheet.create({
  main: {
    width: width,
    height: 70,
  },
  container: {
    width: width,
    height: 70,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    borderBottomWidth: 0.6,
    // left: 10,
  },
  txtQuiz:  {
    fontSize: 17,
    fontFamily: 'Gill Sans',
    backgroundColor: 'transparent',
  },
  picker: {
    flex: 3,
  },
  dialogStyle: {
    borderRadius: 11,
  },
  txtContainer: {
    flex: 1,
    //borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 102, 102)',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  txtSty: {
    fontSize: 16,
    color: '#ecf0f1',
    fontFamily: 'Gill Sans'
  }
})
