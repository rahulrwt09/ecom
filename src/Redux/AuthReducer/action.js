import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"

const loginrequest= ()=>{
    return{type:LOGIN_REQUEST}
}
const loginsuccess= (payload)=>{
    return {type:LOGIN_SUCCESS, payload}
}
const loginfailure= ()=>{
     return {type:LOGIN_FAILURE}
}

export const login =(usedata)=> (dispatch)=>{
    dispatch(loginrequest());
    axios.post("https://reqres.in/api/login", usedata)
    .then((res)=>{
     dispatch(loginsuccess(res.data.token))
    })
    .catch((err)=>{
        dispatch(loginfailure())
    })
}