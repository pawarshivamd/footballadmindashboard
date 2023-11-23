export const USER_LOGIN_BEGIN = "USER_LOGIN_BEGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"

export const USER_PROFILE_FETCH_BEGIN = "USER_PROFILE_FETCH_BEGIN"
export const USER_PROFILE_FETCH_SUCCESS = "USER_PROFILE_FETCH_SUCCESS"
export const USER_PROFILE_FETCH_FAILURE = "USER_PROFILE_FETCH_FAILURE"

export const USER_UPDATE_BEGIN = "USER_UPDATE_BEGIN"
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS"
export const USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE"

const initialState = {
  userData: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_BEGIN:
      return { ...state, loading: true, error: null }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userData: action.payload,
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return { ...state, isAuthenticated: false, userData: null }
    case USER_PROFILE_FETCH_BEGIN:
      return { ...state, loading: true, error: null }
    case USER_PROFILE_FETCH_SUCCESS:
      return { ...state, loading: false, userData: action.payload }
    case USER_PROFILE_FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case USER_UPDATE_BEGIN:
      return { ...state, loading: true, error: null }
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, error: null }
    case USER_UPDATE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default userReducer
