import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profile'
import reposReducer from './reducers/repos'

const rootReducer = combineReducers({
    profileReducer,
    reposReducer
})

const store = createStore(rootReducer)



export default store