import React, { Component } from 'react'
import { getProfile } from '../actions/profile'
import { connect } from 'react-redux'

class Profile extends Component {
    componentDidMount() {
        getProfile() 
    }

    render() {
        return (
            <div className = "profileContainer">
                <img src={this.props.profile.avatar_url} />
                <h1>{this.props.profile.name}</h1>
                <div>{this.props.profile.location}</div>
                <div>{this.props.profile.email}</div>
                <div>{this.props.profile.html_url}</div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        profile: appState.profileReducer.profile
    }

}

export default connect(mapStateToProps)(Profile)