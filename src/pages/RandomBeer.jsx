import React, { Component } from 'react'
import axios from 'axios'
import OneBeer from './../components/OneBeer.jsx'

export default class RandomBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        const url = 'https://ih-beers-api2.herokuapp.com/beers/random'
        axios
            .get(url)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })
            .catch((err) => console.log("error while getting the beers: ", err))

    }
    
    render() {
        return (
            <OneBeer beer={this.state.beer}/>
        )
    }
}
