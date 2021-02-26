import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const AppTextRegular = props =>
  <Text style={{ ...styles.default, ...props.style }}>
    {props.children}
  </Text>

const styles = StyleSheet.create({
  default: {
    fontFamily: 'robotoRegular'
  }
})