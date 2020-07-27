import * as Types from './types'
import Axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'


// Registration 
export const register = data => async dispatch => {
    return Axios.post(`/api/auth/register`, data)
        .then(res => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            return true
        })
        .catch(err => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: err.response && err.response.data.message,
                    type: 'error',
                }
            })
            return false
        })
}

// Login
export const login = data => async dispatch => {
    return Axios.post(`/api/auth/login`, data)
        .then(res => {
            let token = res.data.data;
            if (token) {
                localStorage.setItem('auth_token', token)
                setAuthToken(token)
            }
            dispatch({
                type: Types.SET_USER,
                payload: token
            })
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: res.data.message,
                    type: 'success',
                }
            })
            return true
        })
        .catch(err => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    message: err.response && err.response.data.message,
                    type: 'error',
                }
            })
            return false
        })
}

// Logout
export const logout = history => dispatch => {
    localStorage.removeItem('auth_token')
    history.push(`/`)
    window.location.reload();
    dispatch({
        type: Types.SET_USER,
        payload: {
            token: {},
            user: {}
        }
    })
    dispatch({
        type: Types.SET_MESSAGE,
        payload: {
            message: 'Logout Successful',
            type: 'success',
        }
    })
}

