export default function user(state={
    values: {
        username: "",
        password: ""
      },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
  
    switch (action.type) {
      case "LOGIN_CHANGE_CONTENT": {
        return {
          ...state,
          values: { ...state.values, [action.payload.name]: action.payload.value }
        }
      }
      case "LOGIN_USER": {
        return { ...state, fetching: true }
      }
      case "LOGIN_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          values: {
            username: "",
            password: ""
          }
        }
      }
      case "LOGIN_USER_REJECTED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload
        }
      }
      default: {
        return state;
      }
    }
  }
  