import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import "../App.css";

function Login({ history }) {

    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError] = useState(false);
    console.log(userName);
    console.log(password);
    const logInUser = async() => {
        console.log('handling login');
        const info = { username: userName, password: password };
        let data = await fetch('/login',
         {
              method: 'POST',
              body: JSON.stringify(info),
              headers: {
                'Content-Type': 'application/json',
              }
            
         });
         let token = await data.json();
         if(token){
             localStorage.setItem('token', token);
             history.push('/');
         } 
         else {
            setError(true);
         }
    }
    return (
        <div className='login'>
            <center>
            <div>
                <p>User Name:</p>
                <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
                <p>Password:</p>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={logInUser}>Login</button>
            {error &&<label className='errStyle'>You have failed to Log in. please try again</label>}
            </center>
        </div>
    )
}

export default Login
