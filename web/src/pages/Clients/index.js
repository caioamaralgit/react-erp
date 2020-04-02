import React from 'react';

export default function Clients() {
    return (
        <div>
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
                    <tr className="bg-gray-300">
                        <td>Caio Augusto Barreto do Amaral</td>
                        <td>123.123.123-10</td>
                        <td>Rua José Miguel, 123</td>
                        <td>(13) 12312-1231</td>
                    </tr>
                    <tr className="bg-gray-400">
                        <td>Caio Augusto Barreto do Amaral</td>
                        <td>123.123.123-10</td>
                        <td>Rua José Miguel, 123</td>
                        <td>(13) 12312-1231</td>
                    </tr>
                    <tr className="bg-gray-300">
                        <td>Caio Augusto Barreto do Amaral</td>
                        <td>123.123.123-10</td>
                        <td>Rua José Miguel, 123</td>
                        <td>(13) 12312-1231</td>
                    </tr>
                    <tr className="bg-gray-400">
                        <td>Caio Augusto Barreto do Amaral</td>
                        <td>123.123.123-10</td>
                        <td>Rua José Miguel, 123</td>
                        <td>(13) 12312-1231</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
