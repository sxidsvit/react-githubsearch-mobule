import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const AppLoader = () => {

  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={THEME.BRAND_COLOR} />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
  }
})
