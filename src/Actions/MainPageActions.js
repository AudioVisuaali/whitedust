import axios from "axios";

export function userPresent() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "FETCH_USER_FULLFILLED", payload: { username: "", loggedIn: false } });
        }, 500);
    }
}

export function changeLogin(name, value) {
    return function(dispatch) {
        dispatch({ type: "LOGIN_CHANGE_CONTENT", payload: { name: name, value: value } })
    }
}

export function changeRegister(name, value) {
    return function(dispatch) {
        dispatch({ type: "REGISTER_CHANGE_CONTENT", payload: { name: name, value: value } })
    }
}
export function changeRecover(name, value) {
    return function(dispatch) {
        dispatch({ type: "RECOVER_CHANGE_CONTENT", payload: { name: name, value: value } })
    }
}

export function userRegisterStart() {
    return function(dispatch) {
        dispatch({ type: "CREATE_USER" })
    }
}

export function userRegister(username, email, password) {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "CREATE_USER_FULLFILLED", payload: { username: username, loggedIn: true } })
        }, 500);
    }
}

export function userLoginStart(username, password) {
    return function(dispatch) {
        dispatch({ type: "LOGIN_USER", payload: { username: username, loggedIn: true } })
    }
}

export function userLogin(username, password) {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "LOGIN_USER_FULLFILLED", payload: { username: username, loggedIn: true } })
        }, 500);
    }
}

export function userLogoutStart() {
    return function(dispatch) {
        dispatch({ type: "LOGOUT_USER" })
    }
}

export function userLogout() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "LOGOUT_USER_FULLFILLED" })
        }, 500);
    }
}

export function recoverPasswordRequest(username) {
    return function(dispatch) {
        dispatch({ type: "SEND_RECOVER_REQUEST", payload: "" })
    }
}