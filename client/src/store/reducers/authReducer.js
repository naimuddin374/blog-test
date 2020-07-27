import jwtDecode from 'jwt-decode';
import * as Types from '../actions/types';

const init = {
    isAuth: false,
    user: {},
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_USER: {
            return {
                ...state,
                user: action.payload && Object.keys(action.payload).length ? jwtDecode(action.payload) : {},
                isAuth: action.payload && Object.keys(action.payload).length !== 0,
            }
        }
        default: return state
    }
}
export default authReducer