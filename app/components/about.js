import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'

import NavBar from './settings/navBar'
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
        <Text style={styles.develper}>Developed by Thang Gin </Text>
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
    fontSize: 19,
    fontFamily: 'Times New Roman',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,

  },
  zaus: {
    fontFamily: 'Times New Roman',
    fontSize: 17,
    marginLeft: 20,
    marginBottom: 10,
  },
  ref: {
    fontSize: 15,
    fontFamily: 'Times New Roman',
    marginLeft: 20,
    marginBottom: 30,
  },
  P1: {
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 19,
    fontSize: 16,
    fontFamily: 'Times New Roman',
  },
  develper: {
    // color: 'rgb(0, 102, 102)',
    alignSelf: 'center',
    fontFamily: 'Times New Roman',
    fontSize: 16,
    marginTop: 30,
  },
  email: {
    // color: 'rgb(0, 102, 102)',
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'Times New Roman',

  }
})
