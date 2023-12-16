import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
    setGoCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail-image" src={data.imagen} alt="" />
        <div className="detail-container">
          <h1>{data.title}</h1>
          goToCart ? (
            <Link to='/cart'>Terminar compra</Link> {}
           : (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          )
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
