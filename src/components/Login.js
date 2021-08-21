import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialUserInfo = {
  username: '',
  password: '',
};
const initialError = '';

const Login = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [error, setError] = useState(initialError);
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange=(e)=>{
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const login=e=>{
    e.preventDefault();
    if (!userInfo.username || !userInfo.password ) { return (
      setError('Username or Password not valid.')
    );} else {
      axios.post(`http://localhost:5000/api/login`, userInfo)
      .then(res=>{
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        push('/bubblepage');
      })
      .catch(err=>{
        console.log(err);
        setError('Username or Password not valid.')
      });
    };
  };


  //replace with error state

  


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        <form onSubmit={login}>
          Username:
          <input type="text" name="username" id="username" onChange={handleChange} placeholder="username" value={userInfo.username}/>
          Password:
          <input type="password" name="password" id="password" onChange={handleChange} value={userInfo.password}/>
          <button id="submit">Submit</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"