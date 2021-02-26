import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { AlertContext } from '../context/Alert/AlertContext'
import { THEME } from '../theme'

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert) return null

  return (
    <View style={styles.alertGroup}
      role="alert" >
      <Text style={styles.textColor}>{alert.text}</Text>
      <AntDesign
        name='closecircleo'
        size={28}
        style={styles.searchIcon}
        onPress={hide}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  alertGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textColor: {
    color: THEME.MAIN_COLOR,
    marginRight: 10,
  },
  searchIcon: {
    backgroundColor: THEME.MAIN_COLOR,
    borderRadius: 14,
    marginLeft: 0,
    marginBottom: 0,
    color: THEME.DARK_COLOR,
  },
})