import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Table = ({cart,handleshow}) => {
  const [image , setImage] = useState('');
  const [price , setPrice] = useState('');
  const [heading, setHeading] = useState('');
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
      const collectdata = () => {
        console.log(image,price,heading);
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
     
    <table class="table align-middle mb-0 bg-white" >
    <thead class="bg-light">
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Heading</th>
        <th scope="col">Increse Button</th>
        <th scope="col">Price</th>
        <th scope="col">Remove Button</th>
      </tr>
    </thead>
    {
        item?.map((cartitem, cartindex) => {
            return(
                <div>
                <tbody>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
                src={cartitem.img}
                alt="shope"
                style={{width: "45px" ,  height: "45px"}}
                class="rounded-circle" value= {image} onChange={(e)=> setImage(e.target.value)} 
                />
            <div class="ms-3">
              <p class="fw-bold mb-1" key={cartitem.id} value= {heading} onChange={(e)=> setHeading(e.target.value)}>{cartitem.heading}</p>
              {/*<p class="text-muted mb-0">john.doe@gmail.com</p>*/}
            </div>
          </div>
        </td>
        <td>
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
          {/*<p class="fw-normal mb-1">Software engineer</p>
          <p class="text-muted mb-0">IT department</p>*/}
        </td>
        <td>
          <span class="badge badge-success rounded-pill d-inline" value= {price} onChange={(e)=> setPrice(e.target.value)}>Rs.{cartitem.price}</span>
        </td>
        <td>
          <button type="button" class="btn btn-link btn-sm btn-rounded" onClick={() => removeItem(cartitem.id)}>
          Remove
          </button>
        </td>
      </tr>
    </tbody>
                </div>
            )
        }) 
     }
    
  </table>
  <h2> Total Price : Rs{item.map(item => item.price * item.quantity).reduce((total , value)=> total + value , 0)}</h2>
      <Link to= '/order'><button onClick={popup}>Place order</button></Link>
      <button onClick={collectdata}>Submit</button>
  </div>
    </div>
  )
}

export default Table;
