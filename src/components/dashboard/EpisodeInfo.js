import React, { Component } from 'react'

//WIP!!!!
class EpisodeInfo extends Component {
    constructor() {
        super()
        this.state = {
            currentEpisode: 0
        }
    }

    setCurrentEpisode = (value) => {
        this.setState({ currentEpisode: value })
    }

    render() {
        //Reference to episode doc. To see all values check the firestore database
        const episodeRef = JSON.stringify(this.props.episodeObject)
        const episodeObjectString = JSON.parse(episodeRef)

        return (
            <div className="container">

                <div className="dropdown p-3">

                    {"Episode # : "}
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.currentEpisode + 1}
                    </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            episodeObjectString.episodeTitle.map((r, key) => {
                                return (
                                    <span className="dropdown-item" onClick={() => this.setCurrentEpisode(key)}>{key + 1}</span>
                                )
                            })
                        }
                    </div>

                    <div>
                        {
                            Object.keys(episodeObjectString).map((propertyName, keyy) => {
                                return (
                                    <li key={keyy}> {propertyName} : {episodeObjectString[propertyName][this.state.currentEpisode]} </li>
                                )
                            })
                        }
                    </div>
                </div>

                {console.log(this.props.episodeObject)}
            </div>
        )
    }
}

export default EpisodeInfo