import  axios from 'axios';

import {USER_LOGIN_REQUEST, USER_LOGIN_REQUEST_SUCCESS, USER_LOGOUT, USER_LOGIN_REQUEST_FAIL} from '../constants/userConstants';

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

    } catch (error) {
        dispatch({
            type: USER_LOGIN_REQUEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}