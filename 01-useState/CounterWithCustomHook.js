import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';
export const CounterWithCustomHook = () => {


    const { first, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with Hook {first}</h1>
            <hr></hr>

            <button className='btn btn-danger'
                onClick={() => decrement(2)}
            >-1</button>

            <button className='btn btn-primary'
                onClick={reset}
            > reset </button>

            <button className='btn btn-primary'
                onClick={() => increment(4)}
            >+1</button>
        </>
    )
}
