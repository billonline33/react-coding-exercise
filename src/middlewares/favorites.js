import { REHYDRATED, fetchFavouritesActionCreator, TOGGLE_FAVOURITE_TYPE, REMOVE_FAVOURITE_TYPE } from '../actions'
import { getFavoritesApiUrl } from '../selectors'
import axios from 'axios'
// import qs from 'query-string'

const fetchFavorites = async (apiUrl) => {
  const url = apiUrl
  const response = await axios.get(url, {
    headers: {
      Accept: 'application/json'
    }
  })
  const favorites = response.data
  if (response.status !== 200) {
    const error = new Error('Failed to fetch favorites')
    error.status = response.status
    throw error
  }

  return favorites
}

const addToFavorites = async (apiUrl, id) => {
  const url = apiUrl + '/' + id
  const response = await axios.put(url, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (response.status !== 200) {
    const error = new Error('Failed to add favorite.')
    error.status = response.status
    throw error
  }

  return response.data
}

const removeFromFavorites = async (apiUrl, id) => {
  const url = apiUrl + '/' + id
  const response = await axios.delete(url, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (response.status !== 200) {
    const error = new Error('Failed to add favorite.')
    error.status = response.status
    throw error
  }

  return response.data
}

export default store => next => action => {
  const ret = next(action)
  if (action.type === REHYDRATED) {
    const state = store.getState()
    const apiUrl = getFavoritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(fetchFavorites(apiUrl)))
  }
  if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const state = store.getState()
    const apiUrl = getFavoritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(addToFavorites(apiUrl, action.payload.entityId)))
  }
  if (action.type === REMOVE_FAVOURITE_TYPE) {
    const state = store.getState()
    const apiUrl = getFavoritesApiUrl(state)
    store.dispatch(fetchFavouritesActionCreator(removeFromFavorites(apiUrl, action.payload.entityId)))
  }

  return ret
}
