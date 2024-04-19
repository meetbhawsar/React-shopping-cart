import React from 'react'
import Data from '../Data/Data';
import Product from '../Product/Product';

const Routes = (cnum) => {
  return (
    <div>
      <h1>Router</h1>
      <Product Data={Data} cnum={cnum}/>
    </div>
  )
}

export default Routes;
