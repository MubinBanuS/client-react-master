import axios from "axios";

export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA",message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            //alert("login success")
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            //alert("login failure")
            console.log(state)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}

export const managerReducer=(state={employeeData:[],showRequestModal:false},action)=>{
    //alert("hittt123")
    switch(action.type){
        case "LOAD_EMPLOYEE":
            //alert("hittt expectedd")
            console.log(state)
            //alert("test manage")
            return {
                ...state,
                employeeData:action.data
            };
        case "SEND_SOFTLOCKREQUEST_ACTION":
            return{
                    ...state
                    // ,
                    // showRequestModal:false
                }
        default:
                 return state;
}

}

export const wfmReducer=(state={wfmData:[]},action)=>{
    //alert("hittt123")
    switch(action.type){
        case "LOAD_WFM":
            console.log(action.data)
            console.log("hittt expectedd")
            //alert("hittt expectedd")
            //alert("test manage")
            return {
                ...state,
                wfmData:action.data.wfmData
            };
       
        default:
                 return state;
    }
}