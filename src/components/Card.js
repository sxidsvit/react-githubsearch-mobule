import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import { AppTextRegular } from './ui/AppTextRegular'
import { AppTextBold } from './ui/AppTextBold'
import { THEME } from '../theme'
import PropTypes from 'prop-types'


export const Card = ({ repo }) => (
  <View style={styles.card} >
    <TouchableOpacity onPress={() => Linking.openURL(`${repo.html_url}`)}>
      <AppTextBold style={{ ...styles.cardLink, ...styles.cardTitle }}>{repo.name}</AppTextBold>
    </TouchableOpacity>
    <Text style={styles.cardTitle} >Language:
     <AppTextBold>
        {repo.language}
      </AppTextBold>
    </Text>
    <Text style={styles.cardTitle} >Description: {repo.description}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 100,
    marginBottom: 20,
    backgroundColor: THEME.MAIN_COLOR,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 12,
    paddingVertical: 10,
    minWidth: THEME.MIN_WIDTH,
    paddingHorizontal: 10,
  },
  cardTitle: {
    marginBottom: 10,
    fontWeight: '500',
  },
  cardLink: {
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
    fontSize: 18
  }
})

Card.propTypes = {
  repo: PropTypes.object
}