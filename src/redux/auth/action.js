import axios from "axios";

export const AUTH_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const AUTH_FAILURE_ACTION = "LOGIN_FAILURE_ACTION";

export function authSuccessAction(){
    return {
        type:AUTH_SUCCESS_ACTION
    }
}
export function authFailureAction(){
    return {
        type:AUTH_FAILURE_ACTION
    }
}

export function loginThunk(email,password){
    return (dispatch)=>{
        return axios.post(process.env.REACT_APP_API_SERVER+'/api/login',{
            email:email,password:password
        }).then((response)=>{
            if(response.data==null){
                dispatch(authFailureAction());
            }else if(!response.data.token){
                dispatch(authFailureAction());
            }else{
                localStorage.setItem('token',response.data.token);
                dispatch(authSuccessAction());
            }
        }).catch((err)=>{
            console.log('login error',err)
        })
    }
}

export function registerThunk(username,email,password){
    return (dispatch)=>{
        return axios.post(process.env.REACT_APP_API_SERVER+'/api/register',{
            email:email,username:username,password:password
        }).then((response)=>{
            if(response.data==null){
                dispatch(authFailureAction());
            }else if(!response.data.token){
                dispatch(authFailureAction());
            }else{
                localStorage.setItem('token',response.data.token);
                dispatch(authSuccessAction());
            }
        }).catch((err)=>{
            console.log('register error',err)
        })
    }
}

export function facebookLoginThunk(accessToken){
    return async (dispatch)=>{
        try {
            console.log('accesstoken', accessToken)
            const {data} = await axios.post(
                `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
                {
                    accessToken:accessToken,
                }
            );
            if(data==null){
                dispatch(authFailureAction())
            }else if (!data.token){
                dispatch(authFailureAction());
            }else{
                localStorage.setItem('token',data.token);
                dispatch(authSuccessAction());
            }
        } catch (error) {
            console.error('facebook login',error)
        }
    }
}