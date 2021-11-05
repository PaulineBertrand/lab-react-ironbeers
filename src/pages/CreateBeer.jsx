import React, { Component } from 'react'
import axios from 'axios'

export default class CreateBeer extends Component {
        state = {
            name: "",
            tagline: "",
            desciption: "",
            first_brewed: "",
            attenuation_level: 0,
            contributed_by: ""
        };


        handleChange = (evt) => {

            this.setState({
                [evt.target.id]: evt.target.value
            });

        };

        handleSubmit = (evt) => {
            evt.preventDefault(); // avoid page refresh
            const url = 'https://ih-beers-api2.herokuapp.com/beers/new'
            axios
                .post(url, this.state)
                .then(() => console.log("great success!!"))
                .catch((err) => console.log("error while creating a beer: ", err))
        };

        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                <label htmlFor="name" className="label">
                    Name
                </label>
                <div className="control">
                    <input
                    id="name"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="tagline" className="label">
                    Tagline
                </label>
                <div className="control">
                    <input
                    id="tagline"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="description" className="label">
                    description
                </label>
                <div className="control">
                    <input
                    id="description"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="first_brewed" className="label">
                    First brewed
                </label>
                <div className="control">
                    <input
                    id="first_brewed"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="brewers_tips" className="label">
                    Brewers tips
                </label>
                <div className="control">
                    <input
                    id="brewers_tips"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="attenuation_level" className="label">
                    Attenuation level
                </label>
                <div className="control">
                    <input
                    id="attenuation_level"
                    className="input"
                    type="number"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="field">
                <label htmlFor="contributed_by" className="label">
                    Contributed by
                </label>
                <div className="control">
                    <input
                    id="contributed_by"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                </div>
                </div>

                <div className="control">
                <button className="button">ok</button>
                </div>
            </form>
            );
    }
}
