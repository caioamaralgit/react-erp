import React from 'react';

export default function Users() {
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
                    <tr className="bg-gray-300">
                        <td>caioaba</td>
                        <td>email@email.com</td>
                        <td>1441114141</td>
                    </tr>
                    <tr className="bg-gray-400">
                        <td>caioaba</td>
                        <td>email@email.com</td>
                        <td>1441114141</td>
                    </tr>
                    <tr className="bg-gray-300">
                        <td>caioaba</td>
                        <td>email@email.com</td>
                        <td>1441114141</td>
                    </tr>
                    <tr className="bg-gray-400">
                        <td>caioaba</td>
                        <td>email@email.com</td>
                        <td>1441114141</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
