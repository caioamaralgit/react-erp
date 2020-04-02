import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get("/user").then(({ data }) => {
            setUsers(data);
        })
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="my-4 text-center w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            const className = index % 2 === 0 ? "bg-gray-300" : "bg-gray-400";

                            return (
                                <tr key={user._id} className={className}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
