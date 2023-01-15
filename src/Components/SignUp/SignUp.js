import React,{useState} from 'react';
import axios from 'axios';
import './style.css';

const SignUp = () => {
  const [user, setUser] = useState({
    fName: "", lName:"", email: "", password: "", address: ""
  })

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  
  const sentdata = async (e) => {
    e.preventDefault()
    const { fName, lName, email, password, address } = user;
    
    try {
      const res = await axios.post("/register", { fName, lName, email, password, address })
      window.alert("successfully registration ")
      console.log("name",res);
    } catch (err) {
      window.alert('invalid data')
    }
  }
  return (
      <div className='signUp-box'>
        <h1>Sign Up</h1>
        <form className='from' method='POST'>
          <label htmlFor="/">First Name</label>
          <input className='fa-solid fa-user' type="text" name="fName" autoComplete='off' value={user.fName} onChange={handleInput} placeholder='' />
          <label htmlFor="/">Last Name</label>
          <input type="text" name="lName" autoComplete='off' value={user.lName} onChange={handleInput} placeholder='' />
          <label htmlFor="/">Email-id</label>
          <input type="text" name="email" autoComplete='off' value={user.email} onChange={handleInput} placeholder='' />
          <label htmlFor="/">Password</label>
          <input type="password" name="password" autoComplete='off' value={user.password} onChange={handleInput} placeholder='' />
          <input type="Button" onClick={sentdata} value="Submit" />
        </form>
        <p>By Click the Sign Up Button,you agree to our<br />
          <a href="https://www.zomato.com/policies/terms-of-service/">Term and Condition</a>&nbsp;and&nbsp;
          <a href="https://www.zomato.com/policies/privacy/">Policy Privacy </a>
        </p>
        <p className='login'>Already have an account?&nbsp;
          <a href="login">Login here</a>
        </p>
      </div>
  )
}

export default SignUp
