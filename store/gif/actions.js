import { GET_GIF_PENDING, GET_GIF_SUCCESS, GET_GIF_ERROR } from './action.types'
import axios from 'axios'

export const getGif = () => {
  return dispatch => {
    dispatch(getGifPending())
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=SFS527rWxCUfBNK4b2xibHg5zvJyxsQD&tag=funny&rating=G')
    .then(response => {
      dispatch(getGifSuccess(response.data.data))
    })
    .catch(error => {
      dispatch(getGifError(error))
    })
  }
}

const getGifPending = () => ({
  type: GET_GIF_PENDING
})

const getGifSuccess = (data) => ({
  type: GET_GIF_SUCCESS,
  payload: data
})

const getGifError = (data) => ({
  type: GET_GIF_ERROR,
  payload: data
})