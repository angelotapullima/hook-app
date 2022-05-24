import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../05-useLayoutEffect/layout.css'

export const Layout = () => {


    const [boxSize, setBoxSize] = useState({})
    const { counter, increment } = useCounter(1);
    console.log(counter);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //si data es diferente de nulo ,tons toma el data[0]
    /* It's a way to check if data is not null and then get the first element of the array. */
    const { quote } = !!data && data[0];
    // console.log(loading);

    const pTag = useRef();

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
 

    return (
        <div>
            <h1>Layout effects</h1>
            <hr></hr>

            <blockquote className='blockquote text-right'>
                < p
                    className='mb-0'
                    ref={pTag}
                >
                    {quote}
                </p>
                <br></br>
            </blockquote>



            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>


            <button className='btn btn-primary' onClick={increment}>
                Siguiente clase </button>

        </div>
    )
}
