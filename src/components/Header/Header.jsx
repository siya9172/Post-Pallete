import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa' // Import icons for the hamburger menu
import { FaBorderAll } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    // {
    //   name: <AiOutlineHome/>,
    //   slug: "/",
    //   active: true
    // },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: 'All Post',
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='sticky top-0 md:p-2 py-4 z-50 shadow bg-blue-700 fadeInUp-animation'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile View */}
          <div className='block md:hidden ml-auto relative'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className='text-white text-2xl' /> : <FaBars className='text-white text-2xl' />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`fixed inset-0 md:mb-0  top-[38px] md:bg-transparent md:static md:flex  font-mono md:ml-auto md:items-center z-40 ${isMenuOpen  ? 'block' : 'hidden'}  md:flex`}>
          
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='md:mr-4 bg-blue-700 '>
                
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setIsMenuOpen(false) // Close menu after navigation on mobile
                    }}
                    className='block -m-[1px] md:inline-block px-3 text-xl  py-3 text-white duration-200 hover:bg-blue-800 rounded-full'
                  >
                    {item.name}
                    
                  </button>

                </li>
              ) : null
            )} 
            

            
            {authStatus && (
              <li className='md:mr-4 bg-blue-700 pb-2'>
                <LogoutBtn />
              </li>
            )} 
           
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header


// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow bg-blue-600'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'   />
              
//               </Link>
//           </div>
//           <ul className='hidden  md:flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header