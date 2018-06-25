export default function user(state={
    user: {
      username: "",
      loggedIn: false,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
  
    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload }
      }
      case "FETCH_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload
        }
      }
      case "CREATE_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload
        }
      }
      case "LOGIN_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload
        }
      }
      case "LOGOUT_USER": {
        return { ...state, fetching: true }
      }
      case "LOGOUT_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: {
            username: "",
            loggedIn: false
          }
        }
      }
      default: {
        return state;
      }
    }
  }
  