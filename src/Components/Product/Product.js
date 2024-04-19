import React from 'react'
import Data from '../Data/Data';
import './product.css';

const Product = (props) => {
  const {addToCart} = props
  return (
    <div>
    <div className='container1'>
      <div className='grid1'> 
      {Data.map((v) => {
        return(
          <div className='pcards'>
                  <img className='cimg' src= {v.img} alt="shop"/>
                  <p className='cheading'>{v.heading}</p>
                  <p className='cdscr'> PRICE ₹ {v.price}</p>
                  {/*<button className='AddtoCart' onClick={ () => addToCart(v)}>Add to cart</button>*/}
                  <button type="button" class="btn btn-primary btn-lg " onClick={ () => addToCart(v)} style={{marginTop: "-10px", marginBottom: "10px" , padding: "5px" }}>Add to Cart</button>
                </div>
        )
      })}
      </div>
    </div>
    </div>
  )
}

export default Product;
