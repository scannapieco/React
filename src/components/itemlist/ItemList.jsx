import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data = [] }) => {
    return (
        <>
            {data.length > 0 ? (
                data.map((articulo) => <Item key={articulo.id} info={articulo} />)
            ) : (
                <p>No hay artículos disponibles.</p>
            )}
        </>
    );
}

export default ItemList;
