export const TEAMS_CALL_BEGIN = "TEAMS_CALL_BEGIN"
export const TEAMS_CALL_SUCCESS = "TEAMS_CALL_SUCCESS"
export const TEAMS_CALL_FAILURE = "TEAMS_CALL_FAILURE"

export const TEAM_CREATE_BEGIN = "TEAM_CREATE_BEGIN"
export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS"
export const TEAM_CREATE_FAILURE = "TEAM_CREATE_FAILURE"

export const TEAM_UPDATE_BEGIN = "TEAM_UPDATE_BEGIN"
export const TEAM_UPDATE_SUCCESS = "TEAM_UPDATE_SUCCESS"
export const TEAM_UPDATE_FAILURE = "TEAM_UPDATE_FAILURE"

export const TEAM_DELETE_BEGIN = "TEAM_DELETE_BEGIN"
export const TEAM_DELETE_SUCCESS = "TEAM_DELETE_SUCCESS"
export const TEAM_DELETE_FAILURE = "TEAM_DELETE_FAILURE"

const initialState = {
  teamsData: [],
  loading: false,
  error: null,
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAMS_CALL_BEGIN:
    case TEAM_CREATE_BEGIN:
    case TEAM_UPDATE_BEGIN:
    case TEAM_DELETE_BEGIN:
      return { ...state, loading: true, error: null }

    case TEAMS_CALL_SUCCESS:
      return { ...state, loading: false, teamsData: action.payload }

    case TEAM_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        teamsData: [...state.teamsData, action.payload],
      }

    case TEAM_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        teamsData: state.teamsData.map((team) =>
          team.id === action.payload.id ? action.payload : team
        ),
      }

    case TEAM_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        teamsData: state.teamsData.filter(
          (team) => team.id !== action.payload.id
        ),
      }

    case TEAMS_CALL_FAILURE:
    case TEAM_CREATE_FAILURE:
    case TEAM_UPDATE_FAILURE:
    case TEAM_DELETE_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
export default teamsReducer
