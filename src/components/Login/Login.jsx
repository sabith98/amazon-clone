import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth ,email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth ,email, password)
    .then((auth) => {
      // console.log(auth);
      if (auth) {
        navigate('/');
      }
    })
    .catch(error => alert(error.message))

  }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="" />
        </Link>
        <div className="login__container">
          <h1>SIgn In</h1>

          <form action="">

            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} name="" id="" />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} name="" id="" />


            <button onClick={signIn} className='login__signInButton'>Sign In</button>
          </form>

          <p>By signing in u agree our terms and conditions</p>

          <button onClick={register} className='login__registerButton'>Create a new account</button>
        </div>
    </div>
  )
}

export default Login