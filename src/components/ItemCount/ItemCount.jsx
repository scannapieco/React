import React, { useState, useEffect } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(Math.max(1, parseInt(initial))); // Asegura que initial no sea menor que 1

    const decrease = () => {
        setCount(Math.max(1, count - 1)); // Deshabilita el botón cuando count es 1
    }

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    useEffect(() => {
        setCount(Math.max(1, parseInt(initial))); 
    }, [initial])

    return (
        <div className='counter'>
            <button disabled={count === 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button
                    className={`add-to-cart-button ${stock <= 0 ? 'disabled' : ''}`}
                    disabled={stock <= 0}
                    onClick={() => onAdd(count)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
