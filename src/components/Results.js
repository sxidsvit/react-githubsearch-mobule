import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { GithubContext } from '../context/GitHub/githubContext'
import { Card } from './Card'
import { AppLoader } from './ui/AppLoader'

export const Results = () => {
  const { loading, repos } = useContext(GithubContext)
  const renderItem = ({ item }) => (
    <Card repo={item} />
  );

  if (loading) {
    return <AppLoader />
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }} >
          <FlatList
            data={repos}
            renderItem={renderItem}
            keyExtractor={item => item.archive_url} />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center'
  }
})