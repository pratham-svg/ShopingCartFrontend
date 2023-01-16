import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  let [ log , Setlog ] = useState(false)
   const logOut = ()=>{
       
   }
  return (
    <div>
    <div className="w3-top3">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <Link href="#home" className="w3-bar-item w3-button" to='/'><b>BUYit</b></Link>
    <Link className="w3-bar-item w3-button" to="/">Home</Link>
    <a className="w3-bar-item w3-button" href="/Product">Products</a>
    <Link className="w3-bar-item w3-button" to="/About">About</Link>
    <div className="w3-right w3-hide-small">
    <Link className="w3-bar-item w3-button" to="/card"><i className="fa-solid fa-cart-plus" style={{height : "20px"}}></i></Link>
      <Link className="w3-bar-item w3-button" to="/LogIn">LogIn</Link>
      <Link className="w3-bar-item w3-button" to="/SignUp">SignUp</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
