import React from 'react'
import { Link } from "react-router-dom";


export default function OneBeerInList({ beer }) {
    return (
        <>
            <Link to={"/beer/" + beer._id}>
                <img src={beer.image_url} alt={beer.name} width="50px" />
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p><b>Created by:</b>{beer.contributed_by}</p>
            </Link>
            <hr />
        </>
    )
}
