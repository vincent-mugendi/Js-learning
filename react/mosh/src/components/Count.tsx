import React, { useState } from 'react';

function Count() {


    const [count, setCount] = useState(0);

    function minusCount() {
        setCount(prevcount => prevcount - 1);
    }

    function addCount() {
        setCount(prevcount => prevcount + 1)
    }
    return (
        <>
        <button onClick={minusCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>


        </>
    );
}

export default Count;