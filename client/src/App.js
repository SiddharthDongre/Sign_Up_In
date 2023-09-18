// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let name;

  name = sessionStorage.getItem("name");

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ name ? <Home name={name} /> : <SignIn /> }></Route>
        {/* <Route exact path='/sign-in' element={ <SignIn /> }></Route> */}
        <Route exact path='/sign-up' element={ <SignUp /> }></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
