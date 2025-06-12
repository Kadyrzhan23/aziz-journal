import React from 'react'
import { useGetAllPostsQuery } from '../../../store/RTK/postsApi'
import PostComponent from '../../../components/PostComponent/PostComponent'
import Post from '../../../components/post/Post.jsx'
import { Box } from '@mui/material'
export default function Posts() {
    const { data, isLoading, isError } = useGetAllPostsQuery()

    if(!isLoading){
        console.log(data)
    }
    return (
        <Box
            sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    marginTop:"20px"
                }
            }
            className='flex wrap'>
            {
                !isLoading && data.map((post, index) => <Post
                    key={post.title}
                    index={index}
                    data={post} />)
            }
        </Box>
    )
}
