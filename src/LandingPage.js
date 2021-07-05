
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomePage } from "./pages/HomePage"
import { Login } from "./pages/Login"
import Register from "./pages/Register"
import { SecretInfo } from "./pages/secretInfo"
import ShareLink from "./pages/ShareLink"

const PrivateRoute = ({component,...rest})=>{
    const auth = useSelector(state => state.authStore);
    const {isAuthenticated} = auth;
    const Component = component;
    console.log('rendering data')
    if(Component!=null){
        console.log('component exist',Component)
        console.log('auth',isAuthenticated)
        return (
            <Route
                {...rest}
                render = {(props)=>{
                    return isAuthenticated?(
                        <Component {...props}/>
                    ):(
                        <Redirect 
                            to={{
                                pathname:'/login',
                                state:{from:props.location},
                            }}
                        
                        />
                    )
                }}           
            
            />
        )
    }else{
        return null;
    }
}
const PublicRoute = ({component,...rest})=>{
    const auth = useSelector(state => state.authStore);
    const {isAuthenticated} = auth;
    const Component = component;
    console.log('rendering data')
    if(Component!=null){
        console.log('component exist',Component)
        console.log('auth',isAuthenticated)
        return (
            <Route
                {...rest}
                render = {(props)=>{
                    return (!isAuthenticated)?(
                        <Component {...props}/>
                    ):(
                        <Redirect 
                            to={{
                                pathname:'/secret',
                                state:{from:props.location},
                            }}
                        
                        />
                    )
                }}           
            
            />
        )
    }else{
        return null;
    }
  }



export const LandingPage = (props)=>{
    console.log('params in landing page',props);
    useEffect(()=>{
        console.log('render lain')
    })
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    
                    <Route path='/secret' component={SecretInfo}/>
                    <Route path='/link' component={ShareLink} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}