import React,{useEffect} from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent'
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginComponent from './components/LoginComponent/LoginComponent';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [state,dispatch] = useStateValue();
  useEffect(() => {
   
    auth.onAuthStateChanged(authUser => {
      console.log("The USer is   ",authUser)
      
      if(authUser){
        //The User Just Logged in / The user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      }else{
        //The User is Logged Out
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <React.Fragment>
        <Switch>
        <Route path="/login" >
          <LoginComponent/>
        </Route>
          <Route path="/checkout" >
          <HeaderComponent/>
            <CheckoutComponent/>
          </Route>
          <Route path="/">
        <HeaderComponent/>
            <HomeComponent/>
          </Route>

        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
