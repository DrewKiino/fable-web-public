import React, { Component } from 'react'
import firebase from 'firebase';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as styles from './Stories.module.scss';

import * as actions from '../../store/actions';

import Search from '../../components/UI/Search/Search';
import ContentFullHeight from '../../hoc/ContentFullHeight/ContentFullHeight';
import Verified from '../../components/Stories/Verified/Verified';
import Unverified from '../../components/Stories/Unverified/Unverified';
import AllStories from '../../components/Stories/AllStories/AllStories';
import RejectedStories from '../../components/Stories/RejectedStories/RejectedStories';

class Stories extends Component {
    state = {
        stories: []
    }

    componentWillMount() {
        this.getStoryDocs(result => {
            this.setState({ storyCollection: result })
        })
    }

    componentDidMount() {
        const { stories } = this.props;
        this.setState({ stories });
    }

    //Database reference. Gets 'stories' collection docs returns array.
    getStoryDocs = (callback) => {
        const storiesRef = firebase.firestore().collection('stories')
        console.log(storiesRef)

        let storyData = {}
        let storyDataArray = []

        storiesRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    storyData = doc.data()
                    storyData.seriesTitle = doc.id
                    storyDataArray.push(storyData)
                })
                callback(storyDataArray)
            })
            .catch(err => {
                console.log('Error getting documents', err)
            })
    }

    //Sends data to dashboard, then sent to 'Episodes'
    onClickStory = (docNamee) => {
        this.props.setEpisodeList(docNamee)
    }

    handleClickStory = (id) => {
        const { selectStory, selectedStory } = this.props;
        selectStory(id === selectedStory ? null : id);
    };

    handleChange = ({ target: { value } }) => {
        const { stories } = this.props;
        const newStories = stories.filter(s => {
            return s.storyId.toLowerCase().includes(value.toLowerCase());
        });

        this.setState({ stories: newStories });
    };

    render() {
        const { selectedStory } = this.props;
        const { stories } = this.state;

        const verified = stories.filter(({ verified }) => verified);
        const unverified = stories.filter(({ verified }) => !verified);

        return (
            <ContentFullHeight>
                <div className={[styles.white, styles['center-vertical']].join(' ')}>
                    <NavLink className={styles.link} exact activeClassName={styles.active} to="/stories/all">All Stories</NavLink>
                    <NavLink className={styles.link} exact activeClassName={styles.active} to="/stories/verified">Verified Stories</NavLink>
                    <NavLink className={styles.link} exact activeClassName={styles.active} to="/stories/unverified">Unverified Stories</NavLink>
                    {/* <NavLink className={styles.link} exact activeClassName={styles.active} to="/stories/tags">Tags</NavLink> */}
                    <NavLink className={styles.link} exact activeClassName={styles.active} to="/stories/rejected">Rejected Stories</NavLink>
                </div>

                <Search placeholder="Search by Title, Tags, Keywords" onChange={this.handleChange} />

                <section>
                    <Switch>
                        <Route
                            path="/stories/all"
                            render={props => <AllStories {...props} selectedStory={selectedStory} data={stories} onClickStory={this.handleClickStory} />}
                        />
                        <Route
                            path="/stories/verified"
                            render={props => <Verified {...props} selectedStory={selectedStory} data={verified} onClickStory={this.handleClickStory} />}
                        />
                        <Route
                            path="/stories/unverified"
                            render={props => <Unverified {...props} selectedStory={selectedStory} data={unverified} onClickStory={this.handleClickStory} />}
                        />
                        {/* <Route
                            path="/stories/tags"
                            render={props => <Tags {...props} selectedStory={selectedStory} onClickStory={this.handleClickStory} />}
                        /> */}
                        <Route
                            path="/stories/rejected"
                            render={props => <RejectedStories {...props} selectedStory={selectedStory} data={unverified} onClickStory={this.handleClickStory} />}
                        />
                        <Redirect to="/stories/verified" />
                    </Switch>
                </section>
            </ContentFullHeight>
        )
    }
}

const mapStateToProps = ({ stories }) => ({
    stories: stories.stories,
    selectedStory: stories.selectedStory
});

const mapDispatchToProps = dispatch => ({
    selectStory: (storyId) => dispatch(actions.selectedStory(storyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);