import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  AdMobBanner,
} from 'react-native-admob'
const {width, height} = Dimensions.get('window')
let marginTopOfadSty = 15

if (width > 500) {
  marginTopOfadSty = 70
}
const Ad = () => {
  let banner = <AdMobBanner
                    bannerSize="banner"
                    adUnitID="ca-app-pub-3325489361196839/4250688472"
                    // testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError}/>
   if (width > 500) {
     banner = <AdMobBanner
                  bannerSize="leaderboard"
                  adUnitID="ca-app-pub-3325489361196839/4250688472"
                  // testDeviceID="EMULATOR"
                  didFailToReceiveAdWithError={this.bannerError}/>
   }

  return (
    <View style={styles.adSty}>
      {banner}
    </View>
  )
}

const styles=StyleSheet.create({
  adSty: {
    marginTop: marginTopOfadSty,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

export default Ad
