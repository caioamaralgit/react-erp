import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.scss';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(event) {
        event.preventDefault();

        api.post('login', {
            username,
            password
        }).then(({ data }) => {
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("user", JSON.stringify(data.user));

            history.push('/clients');
        }).catch(({ response }) => {
            console.log(response.data.error);
        });
    }

    return (
        <div className="container max-w-screen-lg">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="block sm:flex items-center">
                    <label htmlFor="username" className="sm:mr-3">Username:</label>
                    <input
                        id="username"
                        className="mt-3 sm:mt-0"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        required
                    />
                </div>
                <div className="block sm:flex items-center">
                    <label htmlFor="password" className="sm:mr-3">Password:</label>
                    <input
                        id="password"
                        type="password"
                        className="mt-3 sm:mt-0"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="text-center">
                    <button className="bg-indigo-500 button" type="submit">Access</button>
                </div>
            </form>
        </div>
    );
};
