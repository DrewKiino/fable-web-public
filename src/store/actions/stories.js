import * as actionTypes from './actionTypes';

export const selectedStory = (selectedStory) => {
    return {
        type: actionTypes.SELECTED_STORY,
        selectedStory
    };
};