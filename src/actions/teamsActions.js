import api from "../API/api";
import {
  TEAMS_CALL_BEGIN,
  TEAMS_CALL_SUCCESS,
  TEAMS_CALL_FAILURE,
  TEAM_CREATE_BEGIN,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAILURE,
  TEAM_UPDATE_BEGIN,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_FAILURE,
  TEAM_DELETE_BEGIN,
  TEAM_DELETE_SUCCESS,
  TEAM_DELETE_FAILURE,
} from "../reducers/teamsReducer";
import Notification from "../views/common/Notifications";

const headers = {
  // 'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
};

export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch({ type: TEAMS_CALL_BEGIN });
    try {
      const { data } = await api.post("/adminGetTeams", { headers });
      const { message, status, teams } = data;
      if (status) {
        dispatch({ type: TEAMS_CALL_SUCCESS, payload: teams });
      } else {
        dispatch({ type: TEAMS_CALL_FAILURE, payload: message });
        Notification("error", message);
      }
    } catch (error) {
      dispatch({ type: TEAMS_CALL_FAILURE, payload: error.message });
      Notification("error", error.message);
      window.location.href = "/";
    }
  };
};

export const createTeam = (teamData) => {
  return async (dispatch) => {
    dispatch({ type: TEAM_CREATE_BEGIN });
    try {
      const { data } = await api.post("/adminAddTeam", teamData, { headers });
      const { status, message, data: newTwam } = data;
      if (status) {
        dispatch({ type: TEAM_CREATE_SUCCESS, payload: newTwam });
        dispatch(fetchTeams());
        Notification("success", message);
      } else {
        Notification("error", message);
        dispatch({ type: TEAM_CREATE_FAILURE, payload: message });
      }
    } catch (error) {
      dispatch({ type: TEAM_CREATE_FAILURE, payload: error.message });
    }
  };
};

export const updateTeam = (teamId, updateData) => {
  return async (dispatch) => {
    dispatch({ type: TEAM_UPDATE_BEGIN });
    try {
      const { data } = await api.post(`/teams/${teamId}`, updateData);
      dispatch({ type: TEAM_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TEAM_UPDATE_FAILURE, payload: error.message });
    }
  };
};

export const deleteTeam = (teamId) => {
  return async (dispatch) => {
    dispatch({ type: TEAM_DELETE_BEGIN });
    try {
      const { data } = await api.post(`/adminDeleteTeam`, { id: teamId });
      const { message, status } = data;
      if (status) {
        Notification("success", message);
        dispatch({ type: TEAM_DELETE_SUCCESS, payload: { id: teamId } });
      } else {
        Notification("error", message);
        dispatch({ type: TEAM_DELETE_FAILURE, payload: message });
      }
    } catch (error) {
      Notification("error", error.message);
      dispatch({ type: TEAM_DELETE_FAILURE, payload: error.message });
    }
  };
};
