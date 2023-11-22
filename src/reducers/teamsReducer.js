export const TEAMS_CALL_BEGIN = "TEAMS_CALL_BEGIN"
export const TEAMS_CALL_SUCCESS = "TEAMS_CALL_SUCCESS"
export const TEAMS_CALL_FAILURE = "TEAMS_CALL_FAILURE"

const initialState = {
  teamsData: [],
  loading: false,
  error: null,
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAMS_CALL_BEGIN:
      return { ...state, loading: true, error: null }
    case TEAMS_CALL_SUCCESS:
      return { ...state, loading: false, teamsData: action.payload }
    case TEAMS_CALL_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default teamsReducer
