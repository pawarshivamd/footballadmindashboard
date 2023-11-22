export const USER_LOGIN_BEGIN = "USER_LOGIN_BEGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"

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
    default:
      return state
  }
}

export default userReducer
