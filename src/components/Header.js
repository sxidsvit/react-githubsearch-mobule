import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { THEME } from '../theme'

const Header = () => {

  return (
    <View style={styles.header} >
      <TouchableOpacity onPress={() => Linking.openURL(THEME.SXIDSVIT_URL)}>
        <View style={styles.headerBrand}>
          <View style={styles.companyInfo}>
            <Image source={require('../img/sxidsvit-logo.png')}
              alt="logo"
              style={styles.companyLogo} />
            {/* <Text style={styles.companyTitle}>sxidsvit</Text>
             */}
            <Text style={styles.companyDescription}>frontend & backend development</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View >
        <Text style={styles.appDescription}>Github repositories search app</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: THEME.MAIN_COLOR,
    height: 70,
    width: '100%',
    marginTop: getStatusBarHeight() + 10,
    backgroundColor: THEME.BACKGROUND_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  headerBrand: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLogo: {
    width: 124,
    height: 22,
    marginRight: 0,
    marginBottom: 5,
  },
  companyInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyTitle: {
    fontSize: 20,
    lineHeight: 20,
    color: THEME.BRAND_COLOR,
    fontWeight: '500',
    marginVertical: 0,
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
  },
  companyDescription: {
    color: THEME.BRAND_COLOR,
    fontSize: 12,
    lineHeight: 12,
    marginVertical: 0,
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
  },
  appDescription: {
    color: THEME.BRAND_COLOR,
    fontSize: 18,
    lineHeight: 18,
    marginVertical: 10,
  }
})

export default Header