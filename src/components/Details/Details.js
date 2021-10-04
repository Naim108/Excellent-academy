import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home'

const Details = () => {
    const {id}=useParams()
    const [details,setDetails]=useState({})


    useEffect(()=>{
        fetch(`../../../public/App.json=${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data.courses[0]))

    },[])
    console.log(details)
    
    
    console.log(id)
    return (
        <div className="details">
           <Header></Header>
           


            <Footer></Footer>
        </div>
    );
};

export default Details;