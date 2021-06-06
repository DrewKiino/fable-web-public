import React from 'react';
import * as styles from './RejectedStories.module.scss';

import Stories from '../Shared/Stories/Stories';

const rejectedStories = props => (
    <main>
        <Stories {...props} onClick={props.onClickStory} />
    </main>
);

export default rejectedStories;