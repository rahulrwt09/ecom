import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialstate= {
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
}
export const reducer =(state=initialstate, {type, paylaod})=>{
   switch(type){
    case LOGIN_REQUEST:
        return {...state,isLoading:true }
    case LOGIN_SUCCESS:
        return {...state, isLoading:false, isAuth:true, token:paylaod}
     case LOGIN_FAILURE:
        return{...state, isLoading:false,isError:true}
    default:
       return state;
   }
}