import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"
import apiReducer from "./reducers/apiReducer"

const initialState = {}
const middlewares = [thunk]

const rootReducer = combineReducers({
  api: apiReducer,
  // other reducers...
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
