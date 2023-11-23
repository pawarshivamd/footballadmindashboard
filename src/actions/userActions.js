import api from "../API/api"
import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_PROFILE_FETCH_BEGIN,
  USER_PROFILE_FETCH_SUCCESS,
  USER_PROFILE_FETCH_FAILURE,
  USER_UPDATE_BEGIN,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  GET_DYNAMICS_BEGIN,
  GET_DYNAMICS_SUCCESS,
  GET_DYNAMICS_FAILURE,
  SET_DYNAMICS_BEGIN,
  SET_DYNAMICS_SUCCESS,
  SET_DYNAMICS_FAILURE,
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

export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: USER_PROFILE_FETCH_BEGIN })
    try {
      const { data } = await api.post("/adminGetProfile")
      const { status, data: userData, message } = data

      if (status) {
        // Notification("success", message)
        dispatch({ type: USER_PROFILE_FETCH_SUCCESS, payload: userData[0] })
      } else {
        Notification("error", message)
        dispatch({ type: USER_PROFILE_FETCH_FAILURE, payload: message })
      }
    } catch (error) {
      dispatch({ type: USER_PROFILE_FETCH_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}
export const updateUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: USER_UPDATE_BEGIN })
    try {
      // Adjust the URL to your specific endpoint for updating user data
      const { data } = await api.post("/adminSetProfile", userData)
      const { status, message } = data
      if (status) {
        Notification("success", message)
        dispatch({ type: USER_UPDATE_SUCCESS, payload: message })
        dispatch(fetchUserProfile())
      } else {
        Notification("error", message)
        dispatch({ type: USER_UPDATE_FAILURE, payload: message })
      }
    } catch (error) {
      dispatch({ type: USER_UPDATE_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}

export const getDynamics = () => {
  return async (dispatch) => {
    dispatch({ type: GET_DYNAMICS_BEGIN })
    try {
      // Adjust the URL to your specific endpoint for getting dynamics
      const { data } = await api.post("/adminGetDynamics")
      const { status, data: dynamics, message } = data
      if (status) {
        dispatch({ type: GET_DYNAMICS_SUCCESS, payload: dynamics })
      } else {
        Notification("error", message)
        dispatch({ type: GET_DYNAMICS_FAILURE, payload: message })
      }
    } catch (error) {
      dispatch({ type: GET_DYNAMICS_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}

export const setDynamics = (dynamicsData) => {
  return async (dispatch) => {
    dispatch({ type: SET_DYNAMICS_BEGIN })
    try {
      // Adjust the URL to your specific endpoint for setting dynamics
      const { data } = await api.post("/adminSetDynamics", dynamicsData)
      const { status, message } = data
      if (status) {
        Notification("success", message)
        dispatch(getDynamics())
      } else {
        Notification("error", message)
        dispatch({ type: SET_DYNAMICS_FAILURE, payload: message })
      }
    } catch (error) {
      dispatch({ type: SET_DYNAMICS_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}