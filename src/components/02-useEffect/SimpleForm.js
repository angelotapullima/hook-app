import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect(() => {
        //console.log('hey');
    }, []);

    useEffect(() => {
        //console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        //console.log('email cambió');
    }, [email]);


    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        }
        )
    }

    return (
        <>
            <h1>Simple Form use Effect</h1>
            <hr />

            <div className='Form-group'>
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>

            
            <div className='Form-group'>
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>

            {name === '123' && <Message />}
        </>
    )
}
