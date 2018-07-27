import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {reducer} from '../reducers/nameReducer'

const reducers = combineReducers({
    reducer
})

export const store = createStore(reducers, {}, applyMiddleware(logger));
