import axios from 'axios'
import {call,put} from 'redux-saga/effects'


export function* loginHandler(action){
    try{
 let  result = yield call(axios.post,"http://localhost:8000/users/signin",action.data)
 console.log(result.data)

 localStorage.setItem("username",result.data.username)
 localStorage.setItem("usertype",result.data.usertype)
 localStorage.setItem("token",result.data.token)

 yield put({type:"LOGIN_SUCCESS",data: 
  {
     username:result.data.username,
     usertype:result.data.usertype,
     token: result.data.token
  }})
    } 
  catch(e){
    
    console.log(e)
    //alert("here")
      yield put({type:"LOGIN_FAILURE"})
  }
}

export function* managerHandler(action){
  try{
    const token= localStorage.getItem("token");
const username =  localStorage.getItem("username")
console.log(token)
console.log(username)
//alert("ttttest")
    console.log('manager-sagas:',action.data);
    console.log(action.data)
    //alert("check")
    const getManagerData = () => {
      //return axios({ method: 'get', url: 'http://localhost:8000/employees/manager/'+'faizal', headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhaXphbCIsInBhc3N3b3JkIjoicGFzc0AxMjMiLCJpYXQiOjE2MzkyMTIwNDd9.JZnlwPKXG98tc3dMSCdAa0NlFNpOdzVQVdZDOquh8Pc' } })
      return axios({ method: 'get', url: 'http://localhost:8000/employees/manager/'+action.data.username, headers: { 'Authorization': 'Bearer '+action.data.token } })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
    }
    let  result = yield call(getManagerData)
    yield put({type:"LOAD_EMPLOYEE",data: result})

  }
  catch(e){
      yield put({type:"FAILURE"})
  }
}

export function* wfmHandler(action){
  try{
    console.log('wfm-sagas:',action.data);
    //alert("check")
    const getWfmData = () => {
      return axios({ method: 'get', url: 'http://localhost:8000/employees/wfm/'+action.data.username, headers: { 'Authorization': 'Bearer '+action.data.token } })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
    }
    let  result = yield call(getWfmData)
    let wfmData={
      wfmData:result
    }
    console.log(result)
    //alert("test wfm result")
    yield put({type:"LOAD_WFM",data: wfmData})

  }
  catch(e){
      yield put({type:"FAILURE"})
  }
}

export function* sendRequestHandler(action){

  try{
    console.log('wfm-sagas:',action.data);
     let requestData={
        employee_id:action.data.employee_id,
        username:action.data.username,
        requestmessage:action.data.requestmessage
      }
      
      console.log(requestData)
      console.log(action.data.token)
      console.log("tojen check")
    //alert("check")
    const sendRequest = () => {
      return axios({ method: 'post', url: 'http://localhost:8000/employees/softlock',
      data:{
          employee_id:action.data.employee_id,
          username:action.data.username,
          requestmessage:action.data.requestmessage
        },
        headers: { 'Authorization': 'Bearer '+action.data.token }
        })
      //.then(response => response.data)
      .then(response=>
        {    
            console.log("check result react") 
            console.log(response.data)       
        })
      .catch(err => {
        throw err;
      });
    }
 
    console.log("post requet")
    let  result = yield call(sendRequest)
    
    console.log(result)
    console.log("send request call")
    //alert("check result")
    let sendRequestResponse={
      message:result
    }
    console.log(result)
    //alert("test wfm result")
    yield put({type:"SEND_SOFTLOCKREQUEST_ACTION",data: sendRequestResponse})
    const getManagerData = () => {
      //return axios({ method: 'get', url: 'http://localhost:8000/employees/manager/'+'faizal', headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhaXphbCIsInBhc3N3b3JkIjoicGFzc0AxMjMiLCJpYXQiOjE2MzkyMTIwNDd9.JZnlwPKXG98tc3dMSCdAa0NlFNpOdzVQVdZDOquh8Pc' } })
      return axios({ method: 'get', url: 'http://localhost:8000/employees/manager/'+action.data.username, headers: { 'Authorization': 'Bearer '+action.data.token } })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
    }
    let  result1 = yield call(getManagerData)
    console.log(result1)
    console.log("result1 chekc")
    yield put({type:"LOAD_EMPLOYEE",data: result1})
   // yield call()
  }
  catch(e){
      yield put({type:"FAILURE"})
  }
}


export function* acceptRequestHandler(action){
  try{
    console.log('wfm-sagas:',action.data);
    //  let requestData={
    //     employee_id:action.data.employee_id,
    //     status:action.data.requestStatus
    //   }
      
      //console.log(requestData)
      console.log(action.data.token)
      console.log("tojen check")
    //alert("check")
    console.log(action.data);
    console.log("expected hitt of manager pop up")
    const sendRequest = () => {
      return axios({ method: 'post', url: 'http://localhost:8000/employees/softlockstatus',
      data:{
        employee_id:action.data.employee_id,
        status:action.data.status
      },
        headers: { 'Authorization': 'Bearer '+action.data.token }
        })
      //.then(response => response.data)
      .then(response=>
        {    
            console.log("check result react") 
            console.log(response.data)       
        })
      .catch(err => {
        throw err;
      });
    }
 
    console.log("post requet")
    let  result = yield call(sendRequest)
    
    console.log(result)
    console.log("send request call")
    //alert("check result")
    let sendRequestResponse={
      message:result
    }
    console.log(result)
    //alert("test wfm result")
    yield put({type:"ACCEPT_SOFTLOCKREQUEST_ACTION",data: sendRequestResponse})
    const getWfmData = () => {
      return axios({ method: 'get', url: 'http://localhost:8000/employees/wfm/'+action.data.username, headers: { 'Authorization': 'Bearer '+action.data.token } })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
    }
    let  result1 = yield call(getWfmData)
    console.log(result1)
    console.log("result1 chekc")
    //alert("hit")
    let wfmData={
      wfmData:result1
    }
    yield put({type:"LOAD_WFM",data: wfmData})
   // yield call()
  }
  catch(e){
      yield put({type:"FAILURE"})
  }
}