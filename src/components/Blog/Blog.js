import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blog.css'

const Blog = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data))

    },[])


    return (
        <div>
            <Header></Header>
            <div className="container">
            <h1 className="fw-bold mt-5">Latest to our Blog Posts </h1>
           
        <div className="row mt-3">
            {
                posts.map(post=><div className="col-md-4 g-3">
                    <Card className="card-container1">

           <Card.Body>
           <Card.Text>
           <div>
           <h5 className="common-color">{post.title}</h5>
           <p>{post.body} <button className="btn btn-course1 p-1">see more</button></p>
           
           </div>
          </Card.Text>
         </Card.Body>
          </Card>
                    
                </div>)
            }

        </div>

    </div>

            <Footer></Footer>
        </div>

    );
};

export default Blog;