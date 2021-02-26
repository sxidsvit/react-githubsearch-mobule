import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './githubContext.js'
import { githubReducer } from './githubReducer'
import { AlertContext } from '../Alert/AlertContext'
import {
  SEARCH_REPOS,
  CLEAR_REPOS,
  SET_LOADING,
  REMOVE_LOADING
} from '../types.js'

export const GithubState = ({ children }) => {
  const initialState = {
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  const alert = useContext(AlertContext)

  const search = async value => {
    try {
      setLoading()
      const url = `https://api.github.com/search/repositories?q=${value}`
      const response = await axios.get(url)
      dispatch({
        type: SEARCH_REPOS,
        payload: response.data.items
      })
      if (!response.data.total_count) {
        alert.show('Nothing was faund ...')
        setTimeout(() => { alert.hide() }, 2000);
      }
      removeLoading()
    } catch (e) {
      alert.show(`Problems with server. Try later...`)
      console.log(`${e}: something wrong with the GitHub server...`)
    }
  }

  const clearRepos = () => dispatch({ type: CLEAR_REPOS })
  const setLoading = () => dispatch({ type: SET_LOADING })
  const removeLoading = () => dispatch({ type: REMOVE_LOADING })

  const { repos, loading } = state

  return (
    <GithubContext.Provider value={{
      search, clearRepos, setLoading, removeLoading, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}
