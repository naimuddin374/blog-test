import store from '../store'

export const authUser = () => {
    let auth = store.getState().auth
    if (auth.isAuth) {
        return auth
    } else {
        return false
    }
}