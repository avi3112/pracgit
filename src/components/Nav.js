import React from "react";
import {Link, link} from 'react-router-dom';
const Nav= ()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/Add">Add Products</Link></li>
                <li><Link to="/Update">Update Products</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/signup">signup</Link></li>
                
            </ul>
        </div>
    )
}

export default Nav;