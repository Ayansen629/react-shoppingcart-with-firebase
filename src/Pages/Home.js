import React from 'react';
// import mobile from './image/mobile.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../Components/Common';

 function Home() {
    return (
        <>
        <Common 
       visit="/services"
       img="images/ecom2.jpg"
        btnName="Get Started"/>
        </>
           )
}
export default Home;
