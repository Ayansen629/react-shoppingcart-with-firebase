import React from 'react';
// import mobile from './image/mobile.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../Components/Common';

 function About() {
    return (
        <>
       <Common name="Welcome to  About page" 
       visit="/contact"
       img="images/ecom1.jpg"
        btnName="Contact Now"/>
        </>
           )
}
export default About;
