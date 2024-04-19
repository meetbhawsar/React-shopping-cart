import React,{ useState } from 'react'
import ModelData from './ModelData';

const Model = (props) => {
    const[model, setModel]= useState(false);
    const mbtn = () => {
        // setModel(!model)
        setModel(true);
    }
    const mbtn1 = () => {
        setModel(false);
    }

  return (
    <div>
    <p onClick={mbtn}><i class="fas fa-shopping-cart" style={{color: "black" , fontSize: "20px"}}></i> 
    <sup>{props.count1}</sup>
     </p>
     
     { model && <ModelData mbtn1={mbtn1}/>}
    </div>
  )
}

export default Model;
