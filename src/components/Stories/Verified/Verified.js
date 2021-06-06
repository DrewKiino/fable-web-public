import React from 'react';

import Stories from '../Shared/Stories/Stories';

const verified = props => (
    <main>
        <Stories {...props} onClick={props.onClickStory} />
    </main>
);

export default verified;