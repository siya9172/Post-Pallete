import React, {useEffect, useState, Suspense} from 'react'
import { PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';
const Container = React.lazy(()=> import("../components/container/Container"))

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
    <Suspense fallback={<div className='text-white text-3xl'>Loading...</div>}>

        <Container>
            <PostForm post={post} />
        </Container>
    </Suspense>
    </div>
  ) : null
}

export default EditPost