import React from 'react';
import { Link } from 'react-router-dom';

import Clients from '../Clients';
import Users from '../Users';

import './styles.scss';

export default function Viewer({ content }) {
    const views = ['clients', 'users'];

    let contentComponent = null;

    switch (content) {
        case "clients":
            contentComponent = <Clients />;
            break;
        case "users":
            contentComponent = <Users />;
            break;
    }

    return (
        <div className="max-w-screen-lg w-full">
            <div className="flex flex-row mb-4 justify-between">
                <div className="buttons-container">
                    {views.map(view => (
                        <Link
                            className={`
                                ${view == content ? "active" : ""} 
                                bg-indigo-500 
                                button 
                                capitalize 
                                shadow-md
                            `}
                            to={`/${view}`}
                        >
                            {view}
                        </Link>
                    ))}
                </div>
                <button className="bg-green-500 button capitalize shadow-md">Create new</button>
            </div>
            <div className="container">
                <h1 className="capitalize">{content}</h1>
                {contentComponent}
            </div>
        </div >
    );
};
