import React from 'react';
import { Link } from 'react-router-dom';

export default function NewUser() {
    return (
        <div class="container max-w-screen-lg">
            <h1>New User</h1>
            <form>
                <div className="block sm:flex items-center">
                    <label for="username" className="sm:mr-3">Username:</label>
                    <input id="username" className="mt-3 sm:mt-0" required />
                </div>
                <div className="block sm:flex items-center">
                    <label for="email" className="sm:mr-3">Email:</label>
                    <input id="email" className="mt-3 sm:mt-0" required type="mail" />
                </div>
                <div className="block sm:flex items-center">
                    <label for="phone" className="sm:mr-3">Phone:</label>
                    <input id="phone" className="mt-3 sm:mt-0" />
                </div>
                <div className="block sm:flex items-center">
                    <label for="password" className="sm:mr-3">Password:</label>
                    <input id="password" className="mt-3 sm:mt-0" required type="password" />
                </div>
                <div className="text-center">
                    <Link className="bg-red-500 button" to="/users">Back</Link>
                    <button className="bg-green-500 button ml-5" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
