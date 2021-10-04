import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="container  d-flex">
                <div className="w-50 border border-dark m-3 p-5">
                <h1 className="fw-bold">The leading global website for learning and instruction</h1>
                <p>Transforming Lives – Talent is universal, but opportunities are not. With access
                     to online learning resources and instruction, anyone, anywhere, can gain skills and 
                     transform their lives in meaningful ways.

Our Beginnings – Established in 2007,
 Edulogy College is a private human sciences school in Claremont, Calif., around 35 miles e
 ast of Los Angeles. We offer a thorough educational plan, with 48 majors in expressions of the human
  experience, humanities, sociologies and regular sciences.

Our Marketplace – We believe the wo
rld’s best teachers aren’t always found in classrooms. Our instructors 
come from virtually every country and offer courses in 65+ languages on practically any topic.</p>
<button className="btn btn-primary">Learn more</button>
                </div>
                <div className="w-50 border border-dark m-3 p-5">
                    <h1 className="fw-bold">25,000 former students living in
50 states and 74 countries!</h1>
<p>Edology has probably the greatest system in human sciences instruction 
    with graduated class working in a wide assortment of profession fields, from business, 
    law and drug to non-benefit, training and science to legislative issues, 
    craftsmanship and amusement.

Remain associated, go along with us for graduated class and grounds occasions, 
return for Alumni Weekends, and figure out how you can get included and help to 
support the Pomona instructive experience for the present – and tomorrow’s – Sagehens.</p>
<button className="btn btn-primary">Learn more</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;