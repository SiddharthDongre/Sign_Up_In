import React, { useState } from 'react';
import "./SignUp.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  const handleUser = (e) => {
    let { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const SignUp = () => {
    let { name, email, password } = user;

    if( name && email && password ){ 
      axios.post("http://127.0.0.1:4000/sign-up", user)
      .then(res => {
        // console.log(res);
        alert(res.data);
        if(res.data === "User Successfully Signed Up") {
          navigate("/");
        };
      }, rej => {
        console.log(rej);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      alert("Invalid Input");
    }
  };
    
  return (
    <>
    <section id='signup'>
      <form id='su-form'>
        <input type="text" name='name' id='name' value={user.name} onChange={handleUser} placeholder='Enter Your Name...' />
        <input type="email" name='email' id='email' value={user.email} onChange={handleUser} placeholder='Enter Your Email...' />
        <input type="password" name='password' id='password' value={user.password} onChange={handleUser} autoComplete='off' placeholder='Enter Your Password...' />
        <button type="button" onClick={SignUp}>Sign up</button>
        <h1>OR</h1>
        <button type="button" onClick={() => navigate("/")}>Sign in</button>
      </form>
    </section>
    </>
  )
}

export default SignUp
