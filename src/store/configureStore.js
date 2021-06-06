import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import storiesReducer from './reducers/stories';
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    stories: storiesReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;