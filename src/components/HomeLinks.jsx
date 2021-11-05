import React from 'react'
import { Link } from "react-router-dom";

export default function HomeLinks({ url, image, title, text }) {
    return (
        <Link to={'/' + url}>
            <img src={image} alt="pages" />
            <h2>{title}</h2>
            <p>{text}</p>
        </Link>
    )
}
