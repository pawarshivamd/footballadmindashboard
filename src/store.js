import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import apiReducer from "./reducers/apiReducer"
import teamsReducer from "./reducers/teamsReducer"
import stadiumReducer from "./reducers/stadiumReducer"
import userReducer from "./reducers/userReducer"

const initialState = {}
const middlewares = [thunk]

const rootReducer = combineReducers({
  api: apiReducer,
  teams: teamsReducer,
  stadium: stadiumReducer,
  user: userReducer,
  // other reducers...
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
