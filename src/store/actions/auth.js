import firebase from 'firebase';

import fire from '../../config/Fire';
import * as actionTypes from './actionTypes';

export const loginSuccess = (user) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        user
    };
};

export const login = (email, password) => {
    return async dispatch => {
        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccess(user));
        } catch (e) {
            console.error(e);
        };
    };
};

export const authenticatedSuccess = (user) => {
    return {
        type: actionTypes.AUTHENTICATED_SUCCESS,
        user
    }
};

export const authenticated = () => {
    return async dispatch => {
        try {
            await firebase.auth().onAuthStateChanged((user) => {
                dispatch(authenticatedSuccess(user));
            })
        } catch (e) {
            console.error(e);
        };
    };
};

export const createUserSuccess = (user) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        user
    };
};

export const createUser = ({ email, password }) => {
    return async dispatch => {
        try {
            await fire.auth().createUserWithEmailAndPassword(email, password);
            const { user } = await fire.auth().signInWithEmailAndPassword(email, password);

            dispatch(createUserSuccess(user));
        } catch (e) {
            console.error(e);
        }
    };
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
};

export const logout = () => {
    return async dispatch => {
        try {
            await firebase.auth().signOut();
            dispatch(logoutSuccess());
        } catch(e) {
            console.error(e);
        }
    };
};