import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="full-body">
      <div className='container'>
        <Posts posts={currentPosts} loading={loading}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
      </div>
    </div>
  );
}

export default App;
