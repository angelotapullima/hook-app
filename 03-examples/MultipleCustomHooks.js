import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {


    const {counter, increment} = useCounter(1);
    console.log(counter);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //si data es diferente de nulo ,tons toma el data[0]
    /* It's a way to check if data is not null and then get the first element of the array. */
    const { author, quote } = !!data && data[0];
   // console.log(loading);
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                    :
                    (
                        <blockquote className='blockquote text-right'>
                            < p className='mb-0'>{quote}</p>
                            <br></br>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>

                    )
            }

            <button className='btn btn-primary' onClick = {increment}>
            Siguiente clase </button>

        </div>
    )
}
