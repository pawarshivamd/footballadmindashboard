import {
  STADIUM_CALL_BEGIN,
  STADIUM_CALL_SUCCESS,
  STADIUM_CALL_FAILURE,
} from "../reducers/stadiumReducer"

import api from "../API/api"
import Notification from "../views/common/Notifications"

export const fetchStadiums = () => {
  return async (dispatch) => {
    dispatch({ type: STADIUM_CALL_BEGIN })
    try {
      const { data } = await api.post("/adminGetStadiums", {
        start: 0,
        count: 5,
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
