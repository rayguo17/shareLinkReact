import {AUTH_FAILURE_ACTION,AUTH_SUCCESS_ACTION  } from "./action"


const initialState = {
    isAuthenticated:
    false || localStorage.getItem('token')!=null
}

const authReducer = (state=initialState,action)=>{
    switch (action.type){
        case AUTH_SUCCESS_ACTION:
            return {
                isAuthenticated:true
            }
        case AUTH_FAILURE_ACTION:
            return state;
        
        default:
            return state;
    }
}
export default authReducer