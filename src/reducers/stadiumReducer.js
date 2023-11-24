export const STADIUM_CALL_BEGIN = "STADIUM_CALL_BEGIN"
export const STADIUM_CALL_SUCCESS = "STADIUM_CALL_SUCCESS"
export const STADIUM_CALL_FAILURE = "STADIUM_CALL_FAILURE"

export const STADIUM_CREATE_BEGIN = "STADIUM_CREATE_BEGIN"
export const STADIUM_CREATE_SUCCESS = "STADIUM_CREATE_SUCCESS"
export const STADIUM_CREATE_FAILURE = "STADIUM_CREATE_FAILURE"

export const STADIUM_UPDATE_BEGIN = "STADIUM_UPDATE_BEGIN"
export const STADIUM_UPDATE_SUCCESS = "STADIUM_UPDATE_SUCCESS"
export const STADIUM_UPDATE_FAILURE = "STADIUM_UPDATE_FAILURE"

export const STADIUM_DELETE_BEGIN = "STADIUM_DELETE_BEGIN"
export const STADIUM_DELETE_SUCCESS = "STADIUM_DELETE_SUCCESS"
export const STADIUM_DELETE_FAILURE = "STADIUM_DELETE_FAILURE"

const initialState = {
  stadiumData: [],
  loading: false,
  error: null,
}

const stadiumReducer = (state = initialState, action) => {
  switch (action.type) {
    case STADIUM_CALL_BEGIN:
    case STADIUM_CREATE_BEGIN:
    case STADIUM_UPDATE_BEGIN:
    case STADIUM_DELETE_BEGIN:
      return { ...state, loading: true, error: null }

    case STADIUM_CALL_SUCCESS:
      return { ...state, loading: false, stadiumData: action.payload }

    case STADIUM_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        stadiumData: [...state.stadiumData, action.payload],
      }

    case STADIUM_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        stadiumData: state.stadiumData.map((stadium) =>
          stadium.id === action.payload.id ? action.payload : stadium
        ),
      }

    case STADIUM_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        stadiumData: state.stadiumData.filter(
          (stadium) => stadium.id !== action.payload.id
        ),
      }

    case STADIUM_CALL_FAILURE:
    case STADIUM_CREATE_FAILURE:
    case STADIUM_UPDATE_FAILURE:
    case STADIUM_DELETE_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default stadiumReducer
