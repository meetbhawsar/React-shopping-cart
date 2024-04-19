import React from 'react'
import Slider from '../Slider/Slider';
import Product from '../Product/Product';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

const Home = ({addToCart}) => {
  return (
    <div>
      <h1>Home</h1>
      <Slider/>
      <Router>
        <Routes>
        <Route path='/' element={<Product  addToCart = {addToCart}/> }/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default Home;
