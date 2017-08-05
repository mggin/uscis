import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native'
import NavBar from './settings/navBar'

const {width, height} = Dimensions.get('window')

let fontSizeOfcredit = 19
let fontSizeOfref = 15
let fontSizeOfzaus = 17
let fontSizeOfdeveloper = 16

if (width == 1366 || height == 1366) {
  fontSizeOfcredit = 29
  fontSizeOfref = 25
  fontSizeOfzaus = 27
  fontSizeOfdeveloper = 26
} else if (width == 768 || 768){
  fontSizeOfcredit = 24
  fontSizeOfref = 20
  fontSizeOfzaus = 22
  fontSizeOfdeveloper = 21
} else {}
export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <NavBar />
        <Text style={styles.credit}>Credit:</Text>
        <Text style={styles.zaus}>
          Zomi Association of United States(ZAUS)
        </Text>
        <Text style={styles.ref} selectable={true}>https://zomiusa.files.wordpress.com/2012/12/us-civics-final.pdf</Text>
        <Text style={styles.zaus}>
          Note
        </Text>
        <Text style={styles.P1}>
          If you find any mistake on Test or Study Guide or you've any suggestions on this App, you could send me messages via E-mail.
        </Text>
        <Text style={styles.developer}>Developed by Thang Gin </Text>
        <Text style={styles.email} selectable={true}>tsg.burma@gmail.com</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  credit: {
    fontSize: fontSizeOfcredit, //19
    fontFamily: 'Times New Roman',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,

  },
  zaus: {
    fontFamily: 'Times New Roman',
    fontSize: fontSizeOfzaus, //17
    marginLeft: 20,
    marginBottom: 10,
  },
  ref: {
    fontSize: fontSizeOfref,
    fontFamily: 'Times New Roman',
    marginLeft: 20,
    marginBottom: 30,
  },
  P1: {
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    lineHeight: fontSizeOfdeveloper+5,
    fontSize: fontSizeOfdeveloper,
    fontFamily: 'Times New Roman',
  },
  developer: {
    // color: 'rgb(0, 102, 102)',
    alignSelf: 'center',
    fontFamily: 'Times New Roman',
    fontSize: fontSizeOfdeveloper, //16
    marginTop: 30,
  },
  email: {
    // color: 'rgb(0, 102, 102)',
    fontSize: fontSizeOfref,
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'Times New Roman',

  }
})
