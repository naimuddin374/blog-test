import * as Types from './types'
import Axios from 'axios'


// Store
export const storeBlog = data => async dispatch => {
    return Axios.post(`/api/blogs`, data)
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

// Get
export const getBlog = () => async dispatch => {
    return Axios.get(`/api/blogs`)
        .then(res => {
            return res.data.data
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
