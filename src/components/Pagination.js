import React from 'react';
import PaginationB from 'react-bootstrap/Pagination';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav className='mb-3'>
        <ul className='pagination position-absolute top-80 start-50 translate-middle'>
            <PaginationB.Prev />
            {
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))
            }
            <PaginationB.Next />
        </ul>
    </nav>
  )
}

export default Pagination;