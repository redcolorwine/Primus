import React from 'react'
import cmodule from './productItem.module.css';
import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {

  let navigate = useNavigate();

  let handleClick = (typeURL) => {
    if (typeof typeURL === 'string') {
      navigate(`/products/${typeURL}`);
    } else {
      navigate(`/products/product/${typeURL}`);
    }

  }

  return (
    <div className={cmodule.productItem} onClick={() => { if (props.id) { handleClick(props.id) } else { handleClick(props.type) } }}>
      <img src={props.img} alt="" />
      {props.brand && <h4>{props.brand}</h4>}
      <p>{props.name}</p>
    </div>
  )
}

export default ProductItem