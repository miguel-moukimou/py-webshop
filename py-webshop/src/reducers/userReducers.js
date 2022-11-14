import { USER_LOGIN_REQUEST, USER_LOGIN_REQUEST_SUCCESS, USER_LOGIN_REQUEST_FAIL, USER_LOGOUT } from '../constants/userConstants';

export const userLoginReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_REQUEST_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        
        case USER_LOGOUT:
            return { }

        default:
            return state
    }
}