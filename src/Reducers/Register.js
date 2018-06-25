export default function user(state={
    values: {
       username: "",
       email: "",
       password: "",
       passwordAgain: ""
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
  
    switch (action.type) {
      case "REGISTER_CHANGE_CONTENT": {
        return {
          ...state,
          values: { ...state.values, [action.payload.name]: action.payload.value }
        }
      }
      case "CREATE_USER": {
        return { ...state, fetching: true }
      }
      case "CREATE_USER_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          values: {
            username: "",
            email: "",
            password: "",
            passwordAgain: ""
          }
        }
      }
      case "CREATE_USER_REJECTED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload
        }
      }
      case "CHECK_USER_REJECTED": {
        return {
          ...state,
          error: action.payload
        }
      }
      default: {
        return state;
      }
    }
  }
  