import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return(
            <div id="container">
                <Profile />
                <Repos />
            </div>
        )

    }
}

export default Home