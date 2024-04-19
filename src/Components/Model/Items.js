import React, {useEffect, useState} from 'react'

const Items = ({cart}) => {
  const [item, setItem]=useState([])

  useEffect  (()=>{
    setItem(cart)
  },[cart]) 
    {/*const [num , setNum] = useState(1)

  const Num = () => {
    setNum(num+1);
  };

  const Num1 = () => {
    if(num>0)
     {
        setNum(num-1);
     }
     else{
        setNum(0);
     }
  };*/}
  return (
    <div>
    {item?.map((cartitem)=>{
      return(
        <div>
        <div className='info'>
        <div className='iteminfo'>
          <div className='pimg'>
              <img src={cartitem.img} alt='shop'/>
          </div>
          <div className='ptitle'>
              <p>{cartitem.heading}</p>
          </div>
          <div className='plusminus'>
              <span ><i class="fas fa-minus minus"></i></span>
             <span>{cartitem.quantity}</span>
              <span><i class="fas fa-plus plus"></i></span>
          </div>
          <div className='price'> <h3>{cartitem.price}</h3></div>
          <div className='delete'> <i class="fas fa-trash-alt"></i></div>
        </div>
        <hr/>
        </div>
    
        <div>
          <h3>Cart Total : <span>2200rs</span></h3>
          <button>order</button>
        </div>
        </div>
      )
    })}
   
    </div>
  )
}

export default Items;

// <input className='mpt' type='text' placeholder='2'/>