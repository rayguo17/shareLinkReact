import logo from './logo.svg';
import './App.css';
import {Provider, useSelector} from'react-redux';
import { store } from './redux/store';
import { LandingPage } from './LandingPage';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { Login } from "./pages/Login"
import Register from "./pages/Register"


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

function App() {
  return (
    <Provider
    store = {store}
    >
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <PublicRoute exact path='/login' component={Login}/>
          <PublicRoute path='/register' component={Register}/>
          <PrivateRoute path='/:content' component={LandingPage}/>
        </Switch>
      
      </BrowserRouter> */}
      <LandingPage/>
    </Provider>
  );
}

export default App;
