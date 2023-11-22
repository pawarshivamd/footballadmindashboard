export const STADIUM_CALL_BEGIN = "STADIUM_CALL_BEGIN"
export const STADIUM_CALL_SUCCESS = "STADIUM_CALL_SUCCESS"
export const STADIUM_CALL_FAILURE = "STADIUM_CALL_FAILURE"

const initialState = {
  stadiumData: [],
  loading: false,
  error: null,
}

const stadiumReducer = (state = initialState, action) => {
  switch (action.type) {
    case STADIUM_CALL_BEGIN:
      return { ...state, loading: true, error: null }
    case STADIUM_CALL_SUCCESS:
      return { ...state, loading: false, stadiumData: action.payload }
    case STADIUM_CALL_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default stadiumReducer
