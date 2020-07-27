import { SET_MESSAGE } from '../actions/types'

const init = {
    message: null,
    type: null,
    time: null,
}

const commonReducer = (state = init, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            {
                return {
                    ...state,
                    message: action.payload.message,
                    type: action.payload.type || 'success',
                    time: new Date().toLocaleString(),
                    actionStatus: (action.payload.type === 'success' && 4) || (action.payload.type === 'error' && 3),
                }
            }
        default:
            return state
    }
}
export default commonReducer
