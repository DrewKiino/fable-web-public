import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import firebase from 'firebase'

import ContentFullHeight from '../../hoc/ContentFullHeight/ContentFullHeight';
import Stories from '../../containers/Stories/Stories';
import Episodes from './Episodes'
import EpisodeInfo from './EpisodeInfo';

export class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            storyCollection: [],
            currentSelection: '',
            episodeObject: {}
        }
    }

    componentWillMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isAuthLoaded: true })
                this.props.setHeaderText(`Welcome ${this.state.isAuthLoaded && firebase.auth().currentUser.displayName} to your dashboard`)
            }
        })
    }

    //Dependance injection structure.
    //Called by child class Stories.js and sent to Episode class
    setEpisodeList = (storyName) => {
        this.setState({ currentSelection: storyName })
    }

    //Called by child class Episodes.js and sent to EpisodeInfo.js
    setEpisodeInfo = (episodeObjectt) => {
        this.setState({ episodeObject: episodeObjectt })
    }

    render() {
        return (
            <ContentFullHeight>
                <Switch>
                    <Route exact path='/dashboard' render={props => <Stories {...props} setEpisodeList={this.setEpisodeList} />} />
                    <Route path='/dashboard/episodes' render={props => <Episodes {...props} collectionName={this.state.currentSelection} setEpisodeInfo={this.setEpisodeInfo} />} />
                    <Route path='/dashboard/info' render={props => <EpisodeInfo {...props} episodeObject={this.state.episodeObject} />} />
                </Switch>
            </ContentFullHeight>
        )
    }
}

export default Dashboard