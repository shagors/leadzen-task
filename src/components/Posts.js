import React, { useState } from 'react';

const Posts = ({ posts, loading }) => {
    const [show, setShow] = useState(false);
    if(loading){
        return (
            <div className="spinner-border text-success position-absolute top-50 start-50 translate-middle" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    console.log(posts);

  return (
    <ul className='list-group my-4'>
        {
            posts.map(post => (
                <li key={post.id} className='list-group-item py-4 mb-3 rounded-4'>
                    <div>
                        <div className="row">
                            <div className="col">
                                <p>{posts[0]?.name}</p>
                            </div>
                            <div className="col">
                                <h6 className='fw-bold'>CONTACT</h6>
                                <p className="fs-6">{posts[0]?.phone}</p>
                            </div>
                            <div className="col">
                                <h6 className='fw-bold'>CITY</h6>
                                <p className="fs-6">{posts[0]?.address?.city}</p>
                            </div>
                            <div className="col">
                                <h6 className='fw-bold'>STATE</h6>
                                <p className="fs-6">{posts[0]?.address?.street}</p>
                            </div>
                            <div className='col'>
                                <button type='button' className="btn btn-primary btn-sm rounded" onClick={() => setShow(!show)}>
                                    {show === true ? 'Hide Details' : 'View Details'}
                                </button>
                            </div>
                            {show && (
                                <div className='container mt-4 mb-2 shadow-lg rounded'>
                                    <div className="p-3">
                                        <div className="row">
                                            <div className="col">
                                                <h6 className='fw-bold'>Description</h6>
                                                <p className="fs-6">{posts[0]?.company?.catchPhrase}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-5">
                                                <div className=''>
                                                    <h6 className="fw-bold">Contact Person</h6>
                                                    <p className="fs-6">{posts[0]?.username}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">Designation</h6>
                                                    <p className="fs-6">{posts[0]?.company.bs}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">Emails</h6>
                                                    <p className="fs-6">{posts[0]?.email}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">Phones</h6>
                                                    <p className="fs-6">{posts[0]?.phone}</p>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className=''>
                                                    <h6 className="fw-bold">Address</h6>
                                                    <p className="fs-6">{posts[0]?.address.street}, {posts[0]?.address.city}, {posts[0]?.address.zipcode}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">City</h6>
                                                    <p className="fs-6">{posts[0]?.address.city}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">State</h6>
                                                    <p className="fs-6">{posts[0]?.address.street}</p>
                                                </div>
                                                <div className=''>
                                                    <h6 className="fw-bold">Country</h6>
                                                    <p className="fs-6">{posts[0]?.website}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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