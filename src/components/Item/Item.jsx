import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 
import { CartContext } from '../../context/CartContext';

const Item = ({ info }) => {
    const cart = useContext(CartContext); 
    console.log('Item: ', cart);

    return (
        <Link to={`/detalle/${info.id}`} className='articulos'>
            {}
            <img src="../../imagen/pexels-andrea-piacquadio-3808904.jpg" alt='' />
        </Link>
    );
}

export default Item;
