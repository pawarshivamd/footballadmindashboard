import {
  API_CALL_BEGIN,
  API_CALL_FAILURE,
  API_CALL_SUCCESS,
} from "../reducers/apiReducer"

// src/actions/apiActions.js
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: API_CALL_BEGIN })
    try {
      const response = await fetch("https://reqres.in/api/users?page=2")
      const data = await response.json()
      dispatch({ type: API_CALL_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: API_CALL_FAILURE, payload: error.message })
    }
  }
}
