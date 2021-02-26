import React, { useEffect, useContext, useState } from 'react'
// import { DebounceInput } from 'react-debounce-input'
import { AsyncStorage } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { AlertContext } from '../context/Alert/AlertContext'
import { GithubContext } from '../context/GitHub/githubContext'
import { SearchList } from './SearchList'
import { steckPush, createSearchHistory } from '../utils/steck'
import { THEME } from '../theme'

export const Search = () => {

  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const alert = useContext(AlertContext)
  const { search, clearRepos } = useContext(GithubContext)


  useEffect(() => {
    createSearchHistory(list, setList)
  }, [])


  const searchEventHandler = (event) => {
    clearRepos()
    if (value.trim()) {
      alert.hide()
      search(value.trim())
      steckPush(value, list, setList)
      createSearchHistory(list, setList)
      Keyboard.dismiss()
    } else {
      alert.show('Enter your search data!')
    }
  }

  return (
    <View style={styles.search}>
      <TouchableOpacity activeOpacity={0.5} >
        <View style={styles.inputGroup}>
          <TextInput
            type="text"
            style={styles.textInput}
            placeholder="repository search ..."
            placeholderTextColor={THEME.MAIN_COLOR}
            keyboardType='default'
            autoCorrect={false}
            autofocus={true}
            maxLength={40}
            // autoCapitalize='characters'
            aria-label="Username" aria-describedby="addon-wrapping"
            value={value}
            onChangeText={setValue}
          />
          <AntDesign
            name='search1'
            size={20}
            style={styles.searchIcon}
            onPress={searchEventHandler}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.searchListHeight} >
        <Text style={styles.searchTitle}>Search history:</Text>
        <SearchList list={list} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    minWidth: THEME.MIN_WIDTH,
    paddingRight: 60,
    fontSize: 14,
    lineHeight: 14,
    color: '#495057',
    backgroundColor: THEME.MAIN_COLOR,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginTop: 10,
  },
  searchIcon: {
    backgroundColor: THEME.MAIN_COLOR,
    marginLeft: -40,
    marginBottom: -10,
    color: THEME.DARK_COLOR,
  },
  searchListHeight: {
    maxHeight: 140,
  },
  searchTitle: {
    color: THEME.MAIN_COLOR,
    marginTop: 10,
    marginBottom: 5
  },
  textColor: {
    color: THEME.MAIN_COLOR,
  },
})