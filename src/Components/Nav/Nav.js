import React from 'react'
import { Link } from 'react-router-dom';
// import Model from '../Model/Model';
import './nav.css';

const Nav = (props) => {
  const{handleshow} = props;
  return (
    <div>
    <nav className='navbar'>
   
    <h3 className='logo' onClick={() => props.handleshow(false)}>Women Accessories</h3>
      <ul className='nav-links'>
      <li> <Link to= '/'> Home </Link></li>
      <li> <Link to= '/about'> About Us </Link></li>
      {/*<li> <Link to= '/table'> Table </Link></li>*/}
      <li> <Link to= '/login'  data-toggle="modal" data-target=".bd-example-modal-lg"> Login </Link></li>
        <li>
          <Link to= "/cart"><i class="fas fa-shopping-cart" onClick={() => props.handleshow(true)}></i><sup>{props.count1}</sup>
          </Link>
        </li>
      </ul>
  </nav>
    </div>
  )
}

export default Nav;
