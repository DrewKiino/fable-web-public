import React from 'react';
import * as styles from './Stories.module.scss';

import CardStrip from '../../Shared/CardStrip/CardStrip';

const stories = props => {
    const cols = ['Image', 'Story ID', 'Created At', 'User ID', 'Messages', 'Episodes', 'Likes', 'Views', 'Tags'];
    const { data, selectedStory, onClick } = props;
    console.log(data)

    const header = cols.map(head => (
        <div className={styles.head} key={head}>{head}</div>
    ));

    const cardStrip = data.map(story => (
        <CardStrip
            key={story.id}
            story={story}
            selectedStory={selectedStory}
            onClick={onClick}
        />
    ));

    return (
        <React.Fragment>
            <section
                className={[
                    styles['container-padding'],
                    styles['white-background'],
                    styles.grid,
                    styles['grey-border-bottom']].join(' ')
                }>
                {header}
            </section>
            {cardStrip}
        </React.Fragment>
    );
};

export default stories;