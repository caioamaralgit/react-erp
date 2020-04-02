import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { history } from '../../routes';
import api from '../../services/api';

export default function NewUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        api.post('/user', {
            username,
            email,
            phone,
            password
        }).then(() => {
            history.push('/users');
        }).catch(error => console.log(error));
    }

    return (
        <div className="container max-w-screen-lg">
            <h1>New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="block sm:flex items-center">
                    <label htmlFor="username" className="sm:mr-3">Username:</label>
                    <input
                        id="username"
                        className="mt-3 sm:mt-0"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="email" className="sm:mr-3">Email:</label>
                    <input
                        id="email"
                        className="mt-3 sm:mt-0"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="mail"
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
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="password" className="sm:mr-3">Password:</label>
                    <input
                        id="password"
                        className="mt-3 sm:mt-0"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        required
                    />
                </div>
                <div className="text-center">
                    <Link className="bg-red-500 button" to="/users">Back</Link>
                    <button className="bg-green-500 button ml-5" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
