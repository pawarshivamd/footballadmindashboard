import api from "../API/api"
import {
  TEAMS_CALL_BEGIN,
  TEAMS_CALL_SUCCESS,
  TEAMS_CALL_FAILURE,
} from "../reducers/teamsReducer"
import Notification from "../views/common/Notifications"

export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch({ type: TEAMS_CALL_BEGIN })
    try {
      const { data } = await api.post("/adminGetTeams")
      const { message, status, teams } = data
      if (status) {
        dispatch({ type: TEAMS_CALL_SUCCESS, payload: teams })
        Notification("success", message)
      } else {
        dispatch({ type: TEAMS_CALL_FAILURE, payload: message })
        Notification("error", message)
      }
    } catch (error) {
      dispatch({ type: TEAMS_CALL_FAILURE, payload: error.message })
      Notification("error", error.message)
    }
  }
}
