import { GET_GIF_PENDING, GET_GIF_SUCCESS, GET_GIF_ERROR } from './action.types'

const intialState = {
  loading: false,
  data: {},
  error: {
    status: false,
    message: 'No error'
  }
}

const gifReducer = (state={...intialState}, action) => {
  switch (action.type) {
    case GET_GIF_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_GIF_ERROR:
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

export default gifReducer