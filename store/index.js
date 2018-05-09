import { createStore, applyMiddleware, combineReducers } from "redux"
import gifReducer from './gif/reducers'
import animeReducer from './ghibli/reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  gif: gifReducer,
  anime: animeReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store