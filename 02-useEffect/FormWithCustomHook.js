import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;


    useEffect(() => {
        console.log('El email cambió');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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


            <div className='Form-group'>
                <input type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    value={password}
                    onChange={handleInputChange}
                ></input>
            </div>


            <button type='submit' className='btn btn-primary' >Guardar</button>
        </form>
    )
}
