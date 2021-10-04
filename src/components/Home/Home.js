import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = (props) => {
    
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className="fw-bold">Recent Courses</h1>
            <p>Research shows that hands-on, interactive learning is more effective</p>
            <Footer></Footer>
        </div>
    );
};

export default Home;