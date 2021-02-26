import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { THEME } from '../theme'
import PropTypes from 'prop-types'

export const SearchList = ({ list = [] }) => {
  if (list) {
    const listNew = list.map((item, idx) => <Text style={styles.textList} key={idx}>{item}</Text>)
    return (
      <ScrollView>
        {listNew}
      </ScrollView>
    )
  } else {
    return <></>
  }
}

SearchList.propTypes = {
  list: PropTypes.array
}

const styles = StyleSheet.create({
  textList: {
    color: THEME.MAIN_COLOR,
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 12,
  }
})
