import axios from "axios";
import React, {useState, useEffect} from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import {Container, Navbar, Form, Button} from "react-bootstrap";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const IndexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(IndexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber =>setCurrentPage(pageNumber);

  return (
    <div>
      <Container fluid="true">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand style={{marginLeft: 130}} href="/" className="fw-bold">React JS GET API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form style={{marginLeft: 580}} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Your Title..."
                className="mr-sm-2"
                aria-label="Search"
              />
              <Button style={{marginLeft: 10}} variant="success outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <br/>
        <Posts posts={currentPosts} loading={loading} />
      </Container>
      <Container style={{float: "left", marginLeft: 420, marginTop: 20}}>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </Container>
    </div>
  )
}

export default App;