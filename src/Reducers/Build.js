function removeItem(parts, match) {
    for (var i = 0; i < parts.length; i++) {
        console.log(isEquivalent(parts[i], match))
        if ( isEquivalent(parts[i], match) ) {
            parts.splice(i, 1);
            return parts;
        }
    }
    return parts;
}
function replaceItem(parts, match) {
    for (var i = 0; i < parts.length; i++) {
        console.log(isEquivalent(parts[i], match))
        if ( parts[i].id === match.id ) {
            parts[i] = match;
            return parts;
        }
    }
    return parts;
}

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

export default function user(state={
    Id: "",
    fetching: false,
    fetched: false,
    name: "",
    picture: "",
    currency: "",
    totalAmount: 0.00,
    partList: [],
    new: false
  }, action) {
  
    switch (action.type) {
        case "BUILD_LOAD": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "BUILD_ADD_ITEM": {
            return {
                ...state,
                partList: [ ...state.partList, action.payload ]
            }
        }
        case "FETCH_BUILD": {
            return { ...state, fetching: true }
        }
        case "FETCH_BUILD_FULLFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                
                ...action.payload
            }
        }
        case "FETCH_BUILD_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: action.payload
            }
        }
        case "BUILD_CHANGE_VALUE": {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
        case "BUILD_REMOVE_PART": {
            return {
                ...state,
                partList: removeItem([...state.partList], action.payload)
            }
        }
        case "BUILD_CUSTOMIZE_ITEM": {
            return {
                ...state,
                partList: replaceItem([...state.partList], action.payload)
            }
        }
        case "BUILD_LOAD_NEW": {
            return {
              ...state,
              Id: 99999999,
              name: "New build",
              picture: "",
              currency: "€",
              totalAmount: 0.00,
              partList: [],
              new: true
              
            }
        }
        case "BUILDS_REMOVE_BUILD": {
            return {
                ...state,
                new: false
            }
        }
        case "PART_EMPTY": {
            return {
                ...state,
                new: false
            }
        }
        case "UPDATE_BUILDS": {
            return {
                ...state,
                new: false
            }
        }
        case "ADD_NEW_BUILDS": {
            return {
                ...state,
                new: false
            }
        }
        default: {
            return state;
        }
    }
}
