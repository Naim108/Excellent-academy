import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = (props) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./App2.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container mt-2">
                <div className="d-flex mt-3 justify-content-between fw-bold ">
                    <h1 className="fw-bold">Get choice of your course</h1>
                    <Link to="/courses"><button className="btn btn-course ">View All</button></Link>
                </div>

        <div className="row mt-3">
            {
                courses.map(course=><div className="col-md-4 g-3">
                    <Card className="card-container">
           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={course.img} alt="" />
           <h4 className="fw-bold mt-3">{course.name}</h4>
           <p>Instructor Name: <span className="text-primary">{course.instructor}</span></p>
           </div>
          </Card.Text>
         </Card.Body>
          <Card.Footer className="d-flex justify-content-between fw-bold ">
              <div><FontAwesomeIcon icon={faClock} /> {course.time}</div>
              <div className="fw-bold course-price">${course.price}</div>
          </Card.Footer>
          </Card> 
                </div>)
            }
           
        </div>
    </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;