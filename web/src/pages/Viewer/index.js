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
                <div className="buttons-container mr-2">
                    {views.map((view, index) => (
                        <Link
                            className={`
                                bg-indigo-500 
                                button 
                                capitalize 
                                mt-2
                                shadow-md
                                text-center
                                w-full
                                sm:mt-0
                                sm:w-auto
                                ${index > 0 ? "sm:ml-5" : ""}
                                ${view == content ? "active" : ""} 
                            `}
                            to={`/${view}`}
                        >
                            {view}
                        </Link>
                    ))}
                </div>
                <Link
                    className="bg-green-500 button capitalize items-center shadow-md text-center"
                    style={{ display: 'flex' }}
                    to={`/${content}/new`}
                >
                    Create new
                </Link>
            </div>
            <div className="container">
                <h1 className="capitalize">{content}</h1>
                {contentComponent}
            </div>
        </div >
    );
};
