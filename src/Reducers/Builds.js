function replaceBuild(builds_list, build) {
  for (var i = 0; i < builds_list.length; i++) {
      if ( builds_list[i].id === build.id ) {
          builds_list[i] = build;
          return builds_list;
      }
  }
  return builds_list;
}
function removeBuild(builds_list, build) {
  for (var i = 0; i < builds_list.length; i++) {
      if ( builds_list[i].id === build.id ) {
          builds_list.splice(i, 1);
          return builds_list;
      }
  }
  return builds_list;
}

export default function user(state={
    builds: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {
  
    switch (action.type) {
      case "FETCH_BUILDS": {
        return {...state, fetching: true}
      }
      case "FETCH_BUILDS_REJECTED": {
        return {...state, fetching: false, errors: action.payload }
      }
      case "FETCH_BUILDS_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          builds: action.payload
        }
      }
      case "REGISTER_ERROR_UPDATE": {
        return {
          ...state,
          errors: {
            registerError: action.payload
          }
        }
      }
      case "UPDATE_BUILDS": {
        return {
          ...state,
          builds: replaceBuild([...state.builds], action.payload)
        }
      }
      case "BUILDS_REMOVE_BUILD": {
        return {
          ...state,
          builds: removeBuild([...state.builds], action.payload)
        }
      }
      case "ADD_NEW_BUILDS": {
        return {
          ...state,
          builds: [...state.builds, action.payload]
        }
      }
      default: {
        return state;
      }
    }
  }
  