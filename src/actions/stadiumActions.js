import {
  STADIUM_CALL_BEGIN,
  STADIUM_CALL_SUCCESS,
  STADIUM_CALL_FAILURE,
  STADIUM_CREATE_BEGIN,
  STADIUM_CREATE_SUCCESS,
  STADIUM_CREATE_FAILURE,
  STADIUM_UPDATE_BEGIN,
  STADIUM_UPDATE_SUCCESS,
  STADIUM_UPDATE_FAILURE,
  STADIUM_DELETE_BEGIN,
  STADIUM_DELETE_SUCCESS,
  STADIUM_DELETE_FAILURE,
} from "../reducers/stadiumReducer"

import api from "../API/api"
import Notification from "../views/common/Notifications"

const headers = {
  // 'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
}

export const fetchStadiums = () => {
  return async (dispatch) => {
    dispatch({ type: STADIUM_CALL_BEGIN })
    try {
      const { data } = await api.post("/adminGetStadiums", {
        start: 0,
        count: 10,
      })
      const { message, status, data: stadiums } = data
      if (status) {
        dispatch({ type: STADIUM_CALL_SUCCESS, payload: stadiums })
        Notification("success", message)
      } else {
        dispatch({ type: STADIUM_CALL_FAILURE, payload: message })
        Notification("error", message)
      }
    } catch (error) {
      dispatch({ type: STADIUM_CALL_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}
export const createStadium = (stadiumData) => {
  return async (dispatch) => {
    dispatch({ type: STADIUM_CREATE_BEGIN })
    try {
      const { data } = await api.post("/adminAddStadium", stadiumData, {
        headers,
      })
      const { message, status } = data
      if (status) {
        dispatch({ type: STADIUM_CREATE_SUCCESS, payload: stadiumData })
        dispatch(fetchStadiums())
        Notification("success", message)
      } else {
        dispatch({ type: STADIUM_CREATE_FAILURE, payload: message })
        Notification("error", message)
      }
    } catch (error) {
      dispatch({ type: STADIUM_CREATE_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}

export const updateStadium = (stadiumId, updateData) => {
  return async (dispatch) => {
    dispatch({ type: STADIUM_UPDATE_BEGIN })
    try {
      const { data } = await api.put(`/updateStadium/${stadiumId}`, updateData)
      const { message, status } = data
      if (status) {
        dispatch({ type: STADIUM_UPDATE_SUCCESS, payload: updateData })
        dispatch(fetchStadiums())
        Notification("success", message)
      } else {
        dispatch({ type: STADIUM_UPDATE_FAILURE, payload: message })
        Notification("error", message)
      }
    } catch (error) {
      dispatch({ type: STADIUM_UPDATE_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}

export const deleteStadium = (stadiumId) => {
  return async (dispatch) => {
    dispatch({ type: STADIUM_DELETE_BEGIN })
    try {
      const { data } = await api.post(`/adminDeleteStadium`, { id: stadiumId })
      const { message, status } = data
      if (status) {
        dispatch({ type: STADIUM_DELETE_SUCCESS, payload: { id: stadiumId } })
        dispatch(fetchStadiums())
        Notification("success", message)
      } else {
        dispatch({ type: STADIUM_DELETE_FAILURE, payload: message })
        Notification("error", message)
      }
    } catch (error) {
      dispatch({ type: STADIUM_DELETE_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}
