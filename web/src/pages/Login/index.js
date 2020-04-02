import React from 'react';

import './styles.scss';

export default function Login() {
    return (
        <div class="container max-w-screen-lg">
            <h1>Login</h1>
            <form>
                <div className="block sm:flex items-center">
                    <label for="username" className="sm:mr-3">Username:</label>
                    <input id="username" className="mt-3 sm:mt-0" />
                </div>
                <div className="block sm:flex items-center">
                    <label for="password" className="sm:mr-3">Password:</label>
                    <input id="password" type="password" className="mt-3 sm:mt-0" />
                </div>
                <div className="text-center">
                    <button className="bg-indigo-500 button" type="submit">Access</button>
                </div>
            </form>
        </div>
    );
};
