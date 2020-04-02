import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        api.get("/client").then((result) => {
            setClients(result.data);
        });
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="my-4 text-center w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th>Name</th>
                        <th>CPF</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client, index) => {
                            const className = index % 2 === 0 ? "bg-gray-300" : "bg-gray-400";

                            return (
                                <tr key={client._id} className={className}>
                                    <td>{client.name}</td>
                                    <td>{client.cpf}</td>
                                    <td>{client.address}</td>
                                    <td>{client.phone}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
