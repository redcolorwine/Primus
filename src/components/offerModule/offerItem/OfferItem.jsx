import React from 'react'
import cmodule from './offerItem.module.css';
import { useNavigate } from 'react-router-dom';

const OfferItem = (props) => {

    let navigate = useNavigate();

    let handleClick = (typeURL) => {
        if (typeof typeURL === 'string') {
            navigate(`/products/${typeURL}`);
        } else {
            navigate(`/products/product/${typeURL}`);
        }

    }

    return (
        <div className={cmodule.offerItem} onClick={() => { if (props.id) { handleClick(props.id) } else { handleClick(props.type) } }}>
            <img src={props.img} alt="" />
            {props.brand && <h4>{props.brand}</h4>}
            <p>{props.type == 'uzi' && <span>Узи-аппарат</span>
                || props.type == 'mrt' && <span>МРТ-аппарат</span>
                || props.type == 'kt' && <span>KT-аппарат</span>
                || props.type == 'tomograph' && <span>Стомотологический томограф</span>
            } {props.name}</p>
        </div>
    )
}

export default OfferItem