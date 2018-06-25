export default function user(state={
        values: {
            username: ""
        },
        fetching: false,
        fetched: false,
        error: null,
    }, action) {
  
    switch (action.type) {
        case "FETCH_RECOVER": {
            return {...state, fetching: true}
        }
        case "FETCH_RECOVER_REJECTED": {
            return {...state, fetching: false, errors: action.payload }
        }
        case "FETCH_RECOVER_FULLFILLED": {
            return {
            ...state,
            fetching: false,
            fetched: true,
            values: { username: action.payload }
            }
        }
        case "SEND_RECOVER_REQUEST": {
            return {
            ...state,
            fetching: false,
            fetched: false,
            values: { username: action.payload }
            }
        }
        case "RECOVER_CHANGE_CONTENT": {
            return {
                ...state,
                values: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
  