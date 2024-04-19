import React,{useEffect,useState} from 'react'
import './cartlist.css';
import { Link } from 'react-router-dom';

const Cartlist = ({cart,handleshow}) => {
  const [item, setItem]=useState([])

  useEffect  (()=>{
    setItem(cart)
  },[cart]) 

  const removeItem = (id) => {
      const newList = item.filter((l) => l.id !== id);
      setItem(newList);
  }
  const popup = () => {
    alert("order Successful");
    console.log("ordered successfully");
  }

  return (
    <div>
    <div className='popup'></div>
    <div className='model'> 
    <div style={{display: "flex" , justifyContent: "center"}} >
    <h1 className='cart'> SHOPPING CART</h1>
    <span style={{marginLeft: "60%" , cursor: "pointer"}} >
     <i class="fas fa-xmark" onClick={() =>handleshow(false)}></i>
     </span>
     </div>
      {
        item?.map((cartitem, cartindex) => {
            return(
                <div style={{display: "flex"}}>
                  <img src={cartitem.img} alt='shope'/>
                    <span className='head' key={cartitem.id}>{cartitem.heading}</span>
                    <button  
                    onClick={() => {
                      const _item = item.map((item,index) =>{
                        return ( cartindex === index ? {...item, quantity: item.quantity - 1} : item)
                      })
                      setItem(_item);
                    }}> 
                    <i class="fas fa-minus minus"></i> </button>  
                    <span className='quantity'>{cartitem.quantity}</span>
                    <button  onClick={() => {
                      const _item = item.map((item,index) =>{
                        return ( cartindex === index ? {...item, quantity: item.quantity + 1} : item)
                      })
                      setItem(_item);
                    }}> 
                      <i class="fas fa-plus plus"></i> </button>
                    <span className='head'> Rs.{cartitem.price}</span>
                    <button className='removebtn' onClick={() => removeItem(cartitem.id)}>Remove</button>              
                </div>
            )
        }) 
     }
     <h2> Total Price : Rs{item.map(item => item.price * item.quantity).reduce((total , value)=> total + value , 0)}</h2>
      <Link to= '/order'><button onClick={popup}>Place order</button></Link>
    </div>
    </div>
  )
}

export default Cartlist;
// <span>{cartitem.quantity}</span>