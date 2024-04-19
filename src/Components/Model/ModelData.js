import React from 'react'
import Items from './Items';
import './model.css'
// import Cartlist from './Cartlist';

const ModelData = (props) => {
  return (
    <div>
    <div className='modelback'></div>
    <div className='modelcontainer'>
      <h2 className='lproduct'>List of Produts</h2>
      <Items/>
      <button className='mbtn' onClick={props.mbtn1}>Done</button>
    </div>
    </div>
  )
}

export default ModelData;

// <Items/>
// <Cartlist/>