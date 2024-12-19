import React from 'react'
import logo2 from '../assets/logo2.png'
function Logo({width = '100px'}) {
  return (
    <div className='flex font-mono font-bold text-xl md:text-2xl text-white justify-center items-center dark:text-white'>
     {/* <img src={logo2} alt='Logo' width='30px' /> */}
      PostPalette
    </div>
  )
}

export default Logo