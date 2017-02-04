import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {whoami} from './reducers/auth'
import {fetchUsers, updateGameActions} from './reducers/game'

import Moderator from './moderator/moderator'

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

export default store

// Set the auth info at start

store.dispatch(whoami())
store.dispatch(fetchUsers())

store.dispatch(updateGameActions())

const mod = new Moderator('testinggame', 'felicia', 1);
mod.handleJoin({name: 'felicia', uid: 1});
mod.handleJoin({name: 'jenny', uid: 2});
mod.handleJoin({name: 'garity', uid: 3});
mod.handleJoin({name: 'gladys', uid: 4});
mod.handleJoin({name: 'ashi', uid: 5});
mod.handleJoin({name: 'galen', uid: 6});
mod.handleStart();
console.log(mod);


// store.dispatch(tallyVotes())
