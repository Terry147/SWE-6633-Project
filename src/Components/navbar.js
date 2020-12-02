import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';


export default class Navbar extends React.Component{

    render()
    {
        return (
            <nav className="navbar">

                <h1>
                    <Link to = "/"> Projects</Link>

                    <div className="navbar-buttons">

                        <Link to ="/newproj" className="btn">New Project</Link>
                        

                    </div>

                </h1>
             </nav>

        );

    }
}