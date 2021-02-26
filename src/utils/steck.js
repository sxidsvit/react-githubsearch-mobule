import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text } from 'react-native'

const storeLocalData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('search-history', jsonValue)
  } catch (e) {
    console.log('storeLocalData - error: ', e);
  }
}

const getLocalData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('search-history')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('getLocalData - error: ', e);
  }
}

export const getSteck = (setList) => {
  getLocalData().then(jsonValue => {
    setList(jsonValue)
    return jsonValue
  })
}

export const steckPush = async (value, list, setList) => {
  getSteck(setList)

  const steck = list || []
  try {
    if (steck) { steck.unshift(value) }
    else {
      steck[0] = value
    }
    if (steck.length > 5) {
      steck.pop()
    }
    storeLocalData(steck)
  } catch (e) {
    console.log('steckPush - error :', e)
  }
  // })
}

export const createSearchHistory = (list, setList) => {
  getSteck(setList)
  const steck = list
  try {
    if (!steck) { setList(null) }
  } catch (e) {
    console.log('createSearchHistor - error :', e)
  }
}