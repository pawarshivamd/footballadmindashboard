export const MATCHES_FETCH_BEGIN = "MATCHES_FETCH_BEGIN"
export const MATCHES_FETCH_SUCCESS = "MATCHES_FETCH_SUCCESS"
export const MATCHES_FETCH_FAILURE = "MATCHES_FETCH_FAILURE"

export const MATCH_CREATE_BEGIN = "MATCH_CREATE_BEGIN"
export const MATCH_CREATE_SUCCESS = "MATCH_CREATE_SUCCESS"
export const MATCH_CREATE_FAILURE = "MATCH_CREATE_FAILURE"

export const MATCH_UPDATE_BEGIN = "MATCH_UPDATE_BEGIN"
export const MATCH_UPDATE_SUCCESS = "MATCH_UPDATE_SUCCESS"
export const MATCH_UPDATE_FAILURE = "MATCH_UPDATE_FAILURE"

export const MATCH_DELETE_BEGIN = "MATCH_DELETE_BEGIN"
export const MATCH_DELETE_SUCCESS = "MATCH_DELETE_SUCCESS"
export const MATCH_DELETE_FAILURE = "MATCH_DELETE_FAILURE"

const initialState = {
  matches: [],
  loading: false,
  error: null,
}

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCHES_FETCH_BEGIN:
    case MATCH_CREATE_BEGIN:
    case MATCH_UPDATE_BEGIN:
    case MATCH_DELETE_BEGIN:
      return { ...state, loading: true, error: null }

    case MATCHES_FETCH_SUCCESS:
      return { ...state, matches: action.payload, loading: false }

    case MATCH_CREATE_SUCCESS:
      return {
        ...state,
        matches: [...state.matches, action.payload],
        loading: false,
      }

    case MATCH_UPDATE_SUCCESS:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id ? action.payload : match
        ),
        loading: false,
      }

    case MATCH_DELETE_SUCCESS:
      return {
        ...state,
        matches: state.matches.filter(
          (match) => match.id !== action.payload.id
        ),
        loading: false,
      }

    case MATCHES_FETCH_FAILURE:
    case MATCH_CREATE_FAILURE:
    case MATCH_UPDATE_FAILURE:
    case MATCH_DELETE_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default matchesReducer
