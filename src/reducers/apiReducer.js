// src/reducers/apiReducer.js

// src/actions/actionTypes.js
export const API_CALL_BEGIN = "API_CALL_BEGIN"
export const API_CALL_SUCCESS = "API_CALL_SUCCESS"
export const API_CALL_FAILURE = "API_CALL_FAILURE"

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_BEGIN:
      return { ...state, loading: true, error: null }
    case API_CALL_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case API_CALL_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default apiReducer
