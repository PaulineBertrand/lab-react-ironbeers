import React, { Component } from 'react'
import axios from 'axios'
import OneBeerInList from '../components/OneBeerInList.jsx'

export default class AllBeers extends Component {
    
    state = {
        beers: []
    }

    componentDidMount() {
        const url = 'https://ih-beers-api2.herokuapp.com/beers'
        axios
            .get(url)
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch((err) => console.log("error while getting the beers: ", err))
    }
    
    render() {
        console.log(this.state.beers)
        return (
            <ul>
                {
                    this.state.beers.map((beer) => {
                        return(
                            <li key={beer._id}>
                                <OneBeerInList beer={beer}/>
                            </li>
                        )
                    })
                }   
            </ul>
        )
    }
}
