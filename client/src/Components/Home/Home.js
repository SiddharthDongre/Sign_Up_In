import React from 'react';
import "./Home.css";

const Home = ({ name }) => {

  const LogOut = () => {
    let a;

    a = window.confirm("Do you wanna log out");

    if(a) {
      sessionStorage.removeItem("name");
      window.location.reload();
    };
  };

  return (
    <>
    <section id='home'>
      <h1 className='home-head'>Welcome {name}</h1>
      <button className='home-btn' onClick={LogOut} type="button">Log out</button>
    </section>
    </>
  )
}

export default Home
