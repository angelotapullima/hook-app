import { useEffect, useRef, useState } from 'react'

export const useFetch = (url = '/api/quotes') => {


    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {


        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        setState({
            loading: true,
            error: null,
            data: null

        })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {


                setTimeout(() => {

                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data: data

                        })
                    }else{
                        console.log('Setstate nunca se llamo');
                    }

                }, 4000)

            })
    }, [url]);

    return state;

}
