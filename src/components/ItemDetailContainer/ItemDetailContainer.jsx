import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const articulos = [
  { id: 1, price: 450, imagen: "../public/imagen/pexels-andrea-piacquadio-3808904.jpg" },
  // Otros artículos
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState(null); 
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      
      setTimeout(() => {
        resolve(articulos);
      }, 3000);
    });

    getData.then((res) => {
      const foundItem = res.find((item) => item.id === parseInt(detalleId));

      
      if (foundItem) {
        setData(foundItem);
      } else {
        console.log(`No se encontró el artículo con id ${detalleId}`);
        
      }
    });
  }, [detalleId]);

  
  return <>{data ? <ItemDetail data={data} /> : <p>Cargando...</p>}</>;
};

export default ItemDetailContainer;
