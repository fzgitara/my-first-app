import { GET_ANIME_PENDING, GET_ANIME_SUCCESS, GET_ANIME_ERROR } from './action.types'
import axios from 'axios'

export const getAnime = () => {
  return dispatch => {
    dispatch(getAnimePending())
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      dispatch(getAnimeSuccess(response.data))
    })
    .catch(error => {
      dispatch(getAnimeError(error))
    })
  }
}

const getAnimePending = () => ({
  type: GET_ANIME_PENDING
})

const getAnimeSuccess = (data) => ({
  type: GET_ANIME_SUCCESS,
  payload: data
})

const getAnimeError = (data) => ({
  type: GET_ANIME_ERROR,
  payload: data
})