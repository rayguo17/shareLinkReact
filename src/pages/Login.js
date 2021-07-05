import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { facebookLoginThunk, loginThunk } from "../redux/auth/action";
import FacebookLogin from 'react-facebook-login'


export const Login = (props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();


    const emailOnChange = (e)=>{
        setEmail(e.target.value);
    }
    const passwordOnChange = (e)=>{
        setPassword(e.target.value)
    }
    const onLogin = ()=>{
        dispatch(loginThunk(email,password));
        setEmail('');
        setPassword('');
    }
    const componenetClick = ()=>{
        return null
    }
    const responseFacebook = (userInfo)=>{
        if(userInfo.accessToken){
            dispatch(facebookLoginThunk(userInfo.accessToken));
        }
    }
    useEffect(()=>{
        
    })

    return (
        <div>
            <label>Email:</label>
            <input
                value={email}
                onChange={emailOnChange}
                type='text'
            />
            <label>
                Password:
                <input
                    value={password}
                    onChange={passwordOnChange}
                    type='password'
                />
            </label>
            <button onClick={onLogin}>Login</button>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
                autoLoad={false}
                fields='name,email,picture'
                onClick={componenetClick}
                callback={responseFacebook}
            />
        </div>
    )
}