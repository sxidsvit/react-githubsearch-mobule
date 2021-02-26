import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { loadAsync } from 'expo-font'
import { GithubState } from './src/context/GitHub/githubState'
import { AlertState } from './src/context/Alert/AlertState'
import Header from './src/components/Header'
import { Alert } from './src/components/Alert'
import { Search } from './src/components/Search'
import { Results } from './src/components/Results'
import Cards from './src/components/Cards'
import { THEME } from './src/theme'
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AlertState>
        <GithubState>
          <SafeAreaView style={styles.wrapper}>
            <Header />
            <Alert />
            <Search />
            <Results />
            <StatusBar style="light" />
          </SafeAreaView>
        </GithubState>
      </AlertState>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.BACKGROUND_COLOR,
    paddingHorizontal: 10,
  },
  textColor: {
    color: THEME.MAIN_COLOR,
  }
});
