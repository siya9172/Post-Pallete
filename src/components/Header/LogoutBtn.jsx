import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { IoLogOutOutline } from "react-icons/io5";

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock flex justify-center items-center  px-6 py-2 font-bold bg-red-500 text-white hover:bg-white hover:font-bold hover:text-red-500 rounded-full transition ease-in-out duration-500'
    onClick={logoutHandler}
    >Logout  <IoLogOutOutline className='ml-1 text-xl'/> </button>
  )
}

export default LogoutBtn