import React from 'react';

import * as styles from './CardStrip.module.scss';

const cardStrip = props => {
    const { story, onClick, selectedStory } = props;

    const tags = story.tags.map((tag, i) => <span className={styles.tag} key={i}>#{tag} </span>);

    return (
        <React.Fragment>
            <section
                onClick={() => onClick(story.id)}
                className={[styles['container-padding'],
                styles['white-background'],
                styles.grid,
                styles.cursor,
                styles.cardstrip].join(' ')}
            >
                <img className={styles.image} src={story.imageUrl} />
                <div>{story.storyId}</div>
                <div>{story.createdAt}</div>
                <div>{story.userId}</div>
                <div>{story.messages.length}</div>
                <div>{story.episodes.length}</div>
                <div>{story.likes.length}</div>
                <div>{story.views.length}</div>
                <div>{tags}</div>
                <div>
                    <select className={styles.select}>
                        <option>Actions</option>
                    </select>
                </div>
            </section>
        </React.Fragment>
    );
};

export default cardStrip;