import React, { Component } from 'react'
import HomeLinks from './../components/HomeLinks.jsx'

const homeData = [
    {url: "beers", image: "assets/beers.png", title: "All Beers", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {url: "random-beer", image: "assets/new-beer.png", title: "Random Beer", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {url: "new-beer", image: "assets/random-beer.png", title: "New Beer", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
]

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeLinks url={homeData[0].url} image={homeData[0].image} title={homeData[0].title} text={homeData[0].text} />
                <HomeLinks url={homeData[1].url} image={homeData[1].image} title={homeData[1].title} text={homeData[1].text} />
                <HomeLinks url={homeData[2].url} image={homeData[2].image} title={homeData[2].title} text={homeData[2].text} />
            </div>
        )
    }
}
