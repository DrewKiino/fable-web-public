import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null
};

const loginSuccess = (state, { user }) => {
    return {
        ...state,
        user
    };
};

const authenticatedSuccess = (state, { user }) => {
    return {
        ...state,
        user
    };
};

const createUserSuccess = (state, { user }) => {
    return {
        ...state,
        user
    };
};

const logoutSuccess = (state, action) => {
    return {
        ...state,
        user: null
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.AUTHENTICATED_SUCCESS: return authenticatedSuccess(state, action);
        case actionTypes.CREATE_USER_SUCCESS: return createUserSuccess(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        default: return state;
    }
};

export default reducer;