import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { history } from '../../routes';

export default function NewClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        api.post('/client', {
            name,
            email,
            address,
            phone
        }).then(() => {
            history.push('/clients');
        }).catch(error => console.log(error));
    }

    return (
        <div className="container max-w-screen-lg">
            <h1>New Client</h1>
            <form onSubmit={handleSubmit}>
                <div className="block sm:flex items-center">
                    <label htmlFor="name" className="sm:mr-3">Name:</label>
                    <input
                        id="name"
                        className="mt-3 sm:mt-0"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="email" className="sm:mr-3">CPF:</label>
                    <input
                        id="email"
                        className="mt-3 sm:mt-0"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="address" className="sm:mr-3">Address:</label>
                    <input
                        id="address"
                        className="mt-3 sm:mt-0"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="phone" className="sm:mr-3">Phone:</label>
                    <input
                        id="phone"
                        className="mt-3 sm:mt-0"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                    />
                </div>
                <div className="text-center">
                    <Link className="bg-red-500 button" to="/clients">Back</Link>
                    <button className="bg-green-500 button ml-5" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
