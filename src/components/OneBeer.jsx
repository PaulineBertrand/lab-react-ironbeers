import React from 'react'

export default function OneBeer({beer}) {

    return (
        <>
                <img src={beer.image_url} alt="beer bottle" width="120px"/>
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p><b>First brewed: </b>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p><b>Contributed by: </b>{beer.contributed_by}</p>
        </>
    )
}
