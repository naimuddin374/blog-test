import React from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class AlertMessage extends React.Component {
    state = {
        message: null,
        type: null,
        time: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.common.time) === JSON.stringify(prevState.time)) return null
        return {
            message: nextProps.common.message,
            type: nextProps.common.type,
            time: nextProps.common.time,
        }
    }
    render() {
        let { message, type } = this.state
        if (message) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: type,
                title: message
            })
        }
        return <div></div>
    }
}

const mapStateToProps = state => ({
    common: state.common
})
export default connect(mapStateToProps)(AlertMessage)