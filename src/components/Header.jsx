import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/home" > <i className="fas fa-home"></i> </Link>
        </header>
    )
}
