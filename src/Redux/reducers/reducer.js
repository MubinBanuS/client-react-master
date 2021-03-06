
export const loginReducer = (state = { username: "NA", token: "NA", usertype: "NA", message: "" }, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            //alert("login success")
            console.log(action.data)
            return { ...action.data, message: "" };
        case "LOGIN_FAILURE":
            console.log(action)
            //alert("login failure")
            console.log(state)
            return { ...state, message: "Login Credentials incorrect" }
        default:
            return state
    }
}

export const managerReducer = (state = { employeeData: [], showRequestModal: false }, action) => {
    switch (action.type) {
        case "LOAD_EMPLOYEE":
            return {
                ...state,
                employeeData: action.data
            };
        case "SEND_SOFTLOCKREQUEST_ACTION":
            return {
                ...state
            }
        default:
            return state;
    }

}

export const wfmReducer = (state = { wfmData: [] }, action) => {
    switch (action.type) {
        case "LOAD_WFM":
            return {
                ...state,
                wfmData: action.data.wfmData
            };
        case "SEND_SOFTLOCKREQUEST_ACTION":
            return {
                ...state
            }
        default:
            return state;
    }
}