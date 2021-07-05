import { useState } from "react"
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/action";



const Register = (props)=>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const usernameOnChange = (e)=>{
        setUsername(e.target.value)
    }
    const emailOnChange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordOnChange=(e)=>{
        setPassword(e.target.value)
    }
    const onRegister=()=>{
        dispatch(registerThunk(username,email,password))
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <label>
                Username:
                <input
                    value={username}
                    onChange={usernameOnChange}
                    type='text'
                />
            </label>
            <label>
                Email:
                <input
                    value={email}
                    onChange={emailOnChange}
                    type='text'
                />
            </label>
            <label>
                Password:
                <input
                    value={password}
                    onChange={passwordOnChange}
                    type='password'
                />
            </label>
            <button onClick={onRegister}>Register</button>
        </div>
    )



}

export default Register