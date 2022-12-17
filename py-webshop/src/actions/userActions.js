import  axios from 'axios';

import {USER_LOGIN_REQUEST, 
    USER_LOGIN_REQUEST_SUCCESS,
    USER_LOGOUT,
    USER_LOGIN_REQUEST_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_REQUEST_SUCCESS,
    USER_REGISTER_REQUEST_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_REQUEST_SUCCESS,
    USER_DETAILS_REQUEST_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_REQUEST_SUCCESS,
    USER_UPDATE_PROFILE_REQUEST_FAIL,
    USER_UPDATE_PROFILE_REQUEST_RESET,
    USER_DETAILS_REQUEST_RESET

} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})

        const config = {
            'Content-type': 'text/json'
        };

        const {data} = await axios.post('/api/users/login/',{
            'username': email,
            'password': password
        }, 
       );

        dispatch({
            type: USER_LOGIN_REQUEST_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));
        window.location = '/';

    } catch (error) {
        dispatch({
            type: USER_LOGIN_REQUEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
    dispatch({type: USER_DETAILS_REQUEST_RESET})
    window.location = '/login';
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            'Content-type': 'text/json'
        };

        const {data} = await axios.post('/api/users/register/',{
            'password': password,
            'name': name,
            'email': email
        }, 
       );

        dispatch({
            type: USER_REGISTER_REQUEST_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_REQUEST_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_REQUEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const details = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            } 
        };

        const {data} = await axios.get(
            `/api/users/${id}/`,
            config, 
       );

        dispatch({
            type: USER_DETAILS_REQUEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_REQUEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_UPDATE_PROFILE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`
            } 
        };

        const {data} = await axios.put(
            `/api/users/profile/update/`,
            user,
            config, 
       );

        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_REQUEST_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}