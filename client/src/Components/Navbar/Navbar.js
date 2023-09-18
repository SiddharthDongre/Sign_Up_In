import React from 'react';
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <section id='navbar'>
      <h1><Link to="/">Home</Link></h1>
      <h1><Link to="/">Sign in</Link></h1>
      <h1><Link to="/sign-up">Sign up</Link></h1>
    </section>
    </>
  )
}

export default Navbar
