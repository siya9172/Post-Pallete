import React, { useState, useEffect, Suspense } from 'react'
// import { Container, PostCard } from '../components'
import { PostCard } from '../components';
import appwriteService from "../appwrite/config";
const Container = React.lazy(() => import("../components/container/Container"))

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8 flex flex-wrap '>
            <Suspense fallback={<div className='text-white text-3xl'>Loading...</div>}>
                <Container>
                    <div className='flex flex-wrap justify-center items-center'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full md:w-1/2 flex justify-center items-center'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </Suspense>
        </div>
    )
}

export default AllPosts