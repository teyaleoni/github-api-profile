import React, { Component, Fragment } from 'react'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'


class Repos extends Component {
    componentDidMount() {
        getRepos() 
    }

    render() {
        return (
            <div className= "reposContainer">
                <ul>
                    {this.props.repos.map((repo, i) => (
                        <Fragment key = {`repoFrag${i}`}>
                            <li key = {`repo${i}`}>
                                <p key = {`repoName${i}`}><a href={repo.html_url}>{repo.name}</a></p>
                                <p key = {`repoLang${i}`}>{repo.language}</p>
                            </li>
                        </Fragment>
                            
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.reposReducer.repos
    }

}

export default connect(mapStateToProps)(Repos)