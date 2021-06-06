import * as actionTypes from '../actions/actionTypes';
const initialState = {
    stories: [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150',
            storyId: 'Ready Player One',
            createdAt: '17th Oct, 15',
            userId: 'user 1',
            messages: ['', '', ''],
            episodes: [
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                },
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                }
            ],
            likes: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            tags: ['horror', 'thriller', 'areyouscaredyet', 'spooky'],
            verified: false
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150',
            storyId: 'Ready Player One',
            createdAt: '17th Oct, 15',
            userId: 'user 1',
            messages: ['', '', ''],
            episodes: [
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                },
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                }
            ],
            likes: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            tags: ['horror', 'thriller', 'areyouscaredyet', 'spooky'],
            verified: true
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150',
            storyId: 'Ready Player One',
            createdAt: '17th Oct, 15',
            userId: 'user 1',
            messages: ['', '', ''],
            episodes: [
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                },
                {
                    id: 1,
                    episode: 1,
                    createdAt: '17th Oct, 15',
                    verified: true,

                }
            ],
            likes: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            tags: ['horror', 'thriller', 'areyouscaredyet', 'spooky'],
            verified: true
        }
    ],
    selectedStory: null
};

const selectedStory = (state, {selectedStory}) => {
    return {
        ...state,
        selectedStory
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SELECTED_STORY: return selectedStory(state, action);
        default: return state;
    }
};

export default reducer;