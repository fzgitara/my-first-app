import { GET_ANIME_PENDING, GET_ANIME_SUCCESS, GET_ANIME_ERROR } from './action.types'

const intialState = {
  loading: false,
  data: {},
  error: {
    status: false,
    message: 'No error'
  }
}

const animeReducer = (state={...intialState}, action) => {
  switch (action.type) {
    case GET_ANIME_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_ANIME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_ANIME_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: 'Oops! Something wrong!'
        }
      }
    default:
      return state
  }
}

export default animeReducer