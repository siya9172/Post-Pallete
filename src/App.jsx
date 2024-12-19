import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  // tinymce bzpo21a1t853g6ew2gqewvjn46r1299p3npuj8zbs5gf6eov
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-900'>
      <div className='  w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer className='absolute inset-x-0 bottom-0  ' />
      </div>
    </div>
  ) : null
}

export default App
