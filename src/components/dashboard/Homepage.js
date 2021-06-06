import React, { Component } from 'react'
import firebase from 'firebase'

class Homepage extends Component {
    constructor() {
        super()

        this.state = {
            //Arrays of document titles to be shown on page
            featuredStories : [],
            romanceStories : [],
            mysteryStories : [],
            horrorStories : [],
        }
    }
    
    componentWillMount(){
        //Data pull from database to state arrays
        this.getCollectionDocs ('featured', (r) => { this.setState({featuredStories : r}) })
        this.getCollectionDocs('romance', (r) => { this.setState({romanceStories: r}) })
        this.getCollectionDocs('mystery', (r) => { this.setState({mysteryStories: r}) })
        this.getCollectionDocs('horror', (r) => { this.setState({horrorStories: r}) })
    }

    //Database reference. Searches for documents based on their 'tags' array and returns array with document objects
    getCollectionDocs = (tag, callback) => {
        const docRef = firebase.firestore().collection('stories')

        let storyData
        let storyDataArr = []

        docRef.where("tags", "array-contains", tag).get()
        .then((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                console.log(doc.id)
                storyData = doc.data()
                storyData.seriesTitle = doc.id
                storyDataArr.push(storyData)
            })
            callback(storyDataArr)

        })
        .catch ((error) => console.log(error))
    }

    render() {

    const style = {
        storyThumbnail : {
            borderRadius:'.4em',
            height : '12em'
        }
    }

    return (
        <div className="container">
            <div className="h3 font-weight-bold">Featured</div>
                <div className="row">
                    {
                        this.state.featuredStories.map((seriesDoc) => (
                        <div className="col col-sm mr-2 bg-light d-flex align-items-end" style={style.storyThumbnail}>
                            <div>
                            <p className="mb-1 font-weight-bold">{seriesDoc.seriesTitle}</p>
                            <p className="">17,000 views</p>
                            </div>
                        </div>
                    ))
                    }
                </div>

            <div className="h3 mt-3 mb-2 font-weight-bold">Horror</div>
            <div className="row">
                {
                    this.state.horrorStories.map((seriesDoc) => (
                    <div className="col col-sm mr-2 bg-light d-flex align-items-end" style={style.storyThumbnail}>
                        <div>
                        <p className="mb-1 font-weight-bold">{seriesDoc.seriesTitle}</p>
                        <p className="">17,000 views</p>
                        </div>
                    </div>
                ))
                }
            </div>
                
            <div className="h3 mt-3 mb-2 font-weight-bold">Mystery</div>
            <div className="row">
                {
                    this.state.mysteryStories.map((seriesDoc) => (
                    <div className="col col-sm mr-2 bg-light d-flex align-items-end" style={style.storyThumbnail}>
                        <div>
                        <p className="mb-1 font-weight-bold">{seriesDoc.seriesTitle}</p>
                        <p className="">17,000 views</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        )
    }
}

export default Homepage