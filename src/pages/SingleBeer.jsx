import React from 'react'
import OneBeer from './../components/OneBeer.jsx'
import axios from 'axios'

export default class SingleBeer extends React.Component {
    state = {
        beer: {}
    }
    
    componentDidMount() {
        const url = 'https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id
        axios
            .get(url)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })
            .catch((err) => console.log("error while getting the single beer: ", err))

    }

    render () {
        console.log(this.props)
        return (
            <OneBeer beer={this.state.beer} />
        )
    }
}
