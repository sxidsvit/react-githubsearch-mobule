import {
  CLEAR_REPOS,
  SEARCH_REPOS,
  SET_LOADING,
  REMOVE_LOADING,
} from '../types.js'

const handlers = {
  [SEARCH_REPOS]: (state, { payload }) => (
    { ...state, repos: payload, loading: false }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  [REMOVE_LOADING]: (state) => ({ ...state, loading: false }),
  [CLEAR_REPOS]: (state) => ({ ...state, users: [] }),
  DEFAULT: state => state
}

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action)
}