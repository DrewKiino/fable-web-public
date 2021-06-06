import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [
        {
            id: 1,
            avatar: 'https://via.placeholder.com/150',
            firstName: 'Sylvia',
            lastName: 'Henderson',
            userId: 'user 1',
            createdAt: '17th Oct, 15',
            stories: [
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
            following: ['user 1', 'user 2', 'user 3'],
            followers: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            likes: ['user 1', 'user 2', 'user 3']
        },
        {
            id: 2,
            avatar: 'https://via.placeholder.com/150',
            firstName: 'Sylvia',
            lastName: 'Henderson',
            userId: 'user 1',
            createdAt: '17th Oct, 15',
            stories: [
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
            following: ['user 1', 'user 2', 'user 3'],
            followers: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            likes: ['user 1', 'user 2', 'user 3']
        },
        {
            id: 3,
            avatar: 'https://via.placeholder.com/150',
            firstName: 'Sylvia',
            lastName: 'Henderson',
            userId: 'user 1',
            createdAt: '17th Oct, 15',
            stories: [
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
            following: ['user 1', 'user 2', 'user 3'],
            followers: ['user 1', 'user 2', 'user 3'],
            views: ['user 1', 'user 2', 'user 3'],
            likes: ['user 1', 'user 2', 'user 3']
        }
    ],
    selectedUser: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;