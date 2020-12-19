
// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/js/bootstrap.bundle.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import ProductList from "./Components/ProductList"
import  Cart from "./Components/Cart"
import Details from './Components/Details';
import Default from './Components/Default';
import Model from './Components/Model';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


class App extends Component {
    render(){
  return (
     <>
     
     <Navbar/>
     <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/services" component={ProductList}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/details" component={Details}/>
         <Route exact path="/cart" component={Cart}/>
         <Route component={Default}/>
     </Switch>
         <Model/>
     {/* <Model/> */}
     {/* <Home/> */}
     
     </>
    
  );
    }
}

export default App;












