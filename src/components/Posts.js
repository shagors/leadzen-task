import React from 'react';
import { Button } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
    if(loading){
        return <h2>Loading....</h2>
    }
  return (
    <ul className='list-group mb-4'>
        {
            posts.map(post => (
                <li key={post.id} className='list-group-item py-5 mb-5'>
                    {post.title}
                    <Button>View Details</Button>
                </li>
            ))
        }
    </ul>
  )
}

export default Posts;