import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <h1>Welcome to the Rick and Morty App</h1>
                <div>
                    <Link to="/home" className="text-white font-semibold text-lg">Go To Home</Link>
                </div>
                <h1> Quick Access</h1>
                <ul className="flex">
                    <li className="ml-4"><Link to="/characters" className="text-white">See Characters</Link></li>

                    <li className="ml-4"><Link to="/details" className="text-white">Character Details</Link></li>

                    <li className="ml-4"><Link to="/notfound" className="text-white">Do Not Click This Page</Link></li>
                    <li className="ml-4"><Link to="/characterdetails" className="text-white">Character Details Page</Link></li>

                </ul>
            </div>
        </nav>
    );
}

export default NavBar;