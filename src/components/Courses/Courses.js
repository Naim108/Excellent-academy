import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Courses.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Courses = () => {
    const [courses,setCourses]=useState([])


    useEffect(()=>{
        fetch('./App.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
            <h1 className="fw-bold">Our Popular Courses </h1>
           
        <div className="row">
            {
                courses.map(course=><div className="col-md-4 g-2">
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

export default Courses;