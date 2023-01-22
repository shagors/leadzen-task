import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
    const [show, setShow] = useState(false);
    if(loading){
        return <h2>Loading....</h2>
    }
  return (
    <ul className='list-group my-4'>
        {
            posts.map(post => (
                <li key={post.id} className='list-group-item py-5 mb-5 rounded-4'>
                    <div>
                        <div className="row">
                            <div className="col">
                                <p>Name</p>
                            </div>
                            <div className="col">
                                <h6>CONTACT</h6>
                                <p>Get from API</p>
                            </div>
                            <div className="col">
                                <h6>CITY</h6>
                                <p>Get from API</p>
                            </div>
                            <div className="col">
                                <h6>STATE</h6>
                                <p>Get from API</p>
                            </div>
                            <div className='col'>
                                <button type='button' className="btn btn-primary btn-sm" onClick={() => setShow(!show)}>
                                    {show === true ? 'Hide Details' : 'View Details'}
                                </button>
                            </div>
                            {show && (
                                <div className=''>
                                    <p>THis is test</p>
                                </div>
                            )}
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Posts;