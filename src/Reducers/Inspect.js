
export default function incpect(state={
    build: {},
    fetching: false,
    fetched: false,
    errors: null
  }, action) {
  
    switch (action.type) {
      case "FETCH_INSPECTBUILD": {
        return {
            build: {},
            fetched: false,
            errors: null, 
            fetching: true
        }
      }
      case "FETCH_INSPECTBUILD_REJECTED": {
        return {...state, fetching: false, errors: action.payload }
      }
      case "FETCH_INSPECTBUILD_FULLFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          build: action.payload
        }
      }
      default: {
        return state;
      }
    }
  }
  