import api from "../API/api"
import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../reducers/userReducer"
import Notification from "../views/common/Notifications"

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_BEGIN })
    try {
      // Adjust the URL to your specific endpoint for user login
      const { data } = await api.post("/adminLogin", credentials)

      const { data: userData, message, status } = data
      if (status) {
        const { token } = userData
        Notification("success", message)
        localStorage.setItem("auth_token", token)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: userData })
        window.location.href = "/teams"
      } else {
        dispatch({ type: USER_LOGIN_FAILURE, payload: message })
        Notification("error", message)
      }
      // Store the auth token in localStorage or handle it as per your requirement
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    // Clear auth token or any other cleanup
    localStorage.removeItem("auth_token")
    dispatch({ type: USER_LOGOUT })
  }
}
