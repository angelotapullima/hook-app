import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    const {counter1,counter2} =  state

   // console.log(counter)
    return (
        < >
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={() =>
                setState({
                    counter1:counter1+1,
                    counter2:counter2
                } )
            }
            >+1</button> 
        </>
    )
}
