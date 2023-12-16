import React, { useState, useEffect } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";

const articulos = [
  { id: 1, price: 450, imagen: "../public/imagen/pexels-andrea-piacquadio-3808904.jpg", category: "enchufes", title: "maquina de escribir" },
];

const ItemListContainer = ({ greeting }) => {
  const [data, setdata] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const res = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(articulos);
          }, 1000);
        });

        if (categoriaId) {
          setdata(res.filter((articulo) => articulo.category === categoriaId));
        } else {
          setdata(res);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [categoriaId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;

