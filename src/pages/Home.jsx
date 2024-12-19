import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Features from "../components/Features";



function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // if (posts.length !== 0) {
    return (
        <div className="  w-full py-8 mt-4 text-center">
            <div className="container mx-auto p-8">
                {/* Welcome Section */}
                <header className="text-center mb-2">
                    <h1 className="text-4xl text-white font-bold mb-4 fadeInUp-animation ">Welcome to Your Personal Journal</h1>
                    <p className="text-xl glow text-blue-400 font-bold fadeInUp-animation mb-10  " 
                    
                    >Upload images and articles that only you can see.</p>
                    {authStatus &&
                        <div className='flex justify-center items-center mt-6'>
                        <Link to='/add-post'>

                            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-blue-800 font-bold  hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full before:rounded-full before:bg-blue-600 before:duration-700 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
                                <span className=" z-10">Start Uploading</span>
                            </button>
                        </Link>
                        </div>
                    }
                    {!authStatus &&
                        <div className='flex justify-center items-center mt-2'>

                            <Link to='/login'>
                                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-blue-800 font-bold  hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
                                    <span class=" z-10">Start Uploading</span>
                                </button>
                            </Link>
                        </div>
                    }

                </header>
            </div>

            {/* <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white ">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container> */}
                <Features/>
                
        </div>
    )
    // }
    // return (
    //     <div className='w-full py-6 bg-black'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 w-1/4'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )
}

export default Home