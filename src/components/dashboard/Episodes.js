import React, { Component } from 'react'
import firebase from 'firebase'
import {Link} from "react-router-dom"

class Episodes extends Component {
    constructor() {
        super()

        this.state = {
            episodeArr : [],
            episodeObj : {}
        }
    }

    componentWillMount(){
        this.getStoryDoc(this.props.collectionName, arr => { this.setState({episodeArr : arr}) })
    }

    // Database reference. Gets info from chosen doc
    getStoryDoc = (docName, callback) => {
        const storiesRef = firebase.firestore().collection('stories')
        let titleArr = []

        storiesRef.doc(docName).get()
        .then( doc => {
            //TODO: Should be functional
            this.setState({episodeObj : doc.data()})
            doc.data().episodeTitle.forEach(title => {
                titleArr.push(title)
            })
            callback(titleArr)
        })
    }

    //Sends data to dashboard, then sent to 'EpisodeInfo'
    onClickEpisode = (episodeObjj) => {
        this.props.setEpisodeInfo(episodeObjj)
    }

    render() {
        return (
        <div className="container">
            <div className="text-center">
                <p className="h3">Episodes</p>
            </div>

            <ul className="list-group">
                {
                this.state.episodeArr.map((doc) => (
                    /* Sends clicked doc to parent 'Dashboard.js' then sent to 'EpisodeInfo.js' and loads 'EpisodeInfo' page */
                    <li className="list-group-item" onClick={() => this.onClickEpisode(this.state.episodeObj) }>
                        <Link to= {`/dashboard/info`}> {doc} </Link>
                    </li>
                ))
                }
            </ul>
        </div>
        )
    }
}

export default Episodes