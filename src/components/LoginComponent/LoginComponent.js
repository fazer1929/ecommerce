import React, { useState } from 'react'
import './LoginComponent.css'
import { Link,useHistory } from 'react-router-dom'
import { auth } from 'firebase';

function LoginComponent() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn= (e) =>{
        e.preventDefault();
        //Login
        auth.
            signInWithEmailAndPassword(email,password)
            .then(user =>{
                history.push("/")
            })
            .catch(error => console.log(error))
            

    }

    const signUp= (e) =>{
        e.preventDefault();
        //Register
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((user) => {//user === auth
            console.log(user)
            if(user){
                history.push('/')
            }
        }).catch(error => alert("error"))
            
    }
    
    return (
        

        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmallRGB.png"/>
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email : </h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />

                    <h5>Password : </h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />

                    <button onClick={signIn} className="login__signinButton">Sign In</button>
                </form>
                <p>By Signing in you agree that you're Awesome.</p>
                <button onClick={signUp} className="login__registerButton">Create Your Account</button>
            </div>

        </div>
    )
}

export default LoginComponent
