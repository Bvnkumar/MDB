import React from 'react'
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        
        <div id="mySidenav" className="sidenav d-flex flex-column">
            <div className="border-top border-bottom">
                <Link to="/artists">Artists</Link></div>
        </div>)

}