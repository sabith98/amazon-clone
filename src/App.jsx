import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { useStateValue } from '../store/StateProvider'

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {

      console.log('User is', authUser);

      if (authUser) {
        // whaen user signed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // when user signed out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          {/* <Route path='/login' element={ <Login /> }/> */}
          <Route path='/login' element={ <Login /> }/>
          <Route path='/' element={ <Home /> }/>
          <Route path='/checkout' element={ <Checkout /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
