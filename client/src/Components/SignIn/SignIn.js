import React, { useState } from 'react';
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

  const [user, setUser] = useState({
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

  const SignIn = () => {
    let { email, password } = user;

    if(email && password) {
      axios.post("http://127.0.0.1:4000/sign-in", user)
      .then(res => {
        // console.log(res);
        if(res.data === "User not signed up") {
          alert(res.data);
          navigate("/sign-up");
        } else if(res.data === "Invalid Password") {
          alert("Invalid Password");
        } else {
          sessionStorage.setItem("name", res.data.name);
          window.location.reload();
        };
      }, rej => {
        console.log(rej);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      alert("Invalid Input");
    };
  };

  return (
    <>
    <section id='sign-in'>
    <form id='si-form'>
        <input type="email" name='email' id='email' value={user.email} onChange={handleUser} placeholder='Enter Your Email...' />
        <input type="password" name='password' id='password' value={user.password} onChange={handleUser} autoComplete='off' placeholder='Enter Your Password...' />
        <button type="button" onClick={SignIn}>Sign in</button>
        <h1>OR</h1>
        <button type="button" onClick={() => navigate("/sign-up")}>Sign up</button>
      </form>
    </section>
    </>
  )
}

export default SignIn
