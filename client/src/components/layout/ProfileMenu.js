import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';


class ProfileMenu extends Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.outSideClickHandler, false)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outSideClickHandler, false)
    }
    outSideClickHandler = e => {
        if (this.node.contains(e.target)) return
        this.props.menuHandler()
    }
    render() {
        return (
            <Fragment>
                <ul className="user-profile-wrapper" ref={node => this.node = node}>
                    <li><Link to="#blank">Balance = {this.props.user.balance}</Link></li>
                    <li><Link to="/backend/profile">Profile</Link></li>
                    <li><Link to="#blank" onClick={() => this.props.logout(this.props.history)}>Logout</Link></li>
                </ul>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    user: state.auth.user,
})
export default connect(mapStateToProps, { logout })(ProfileMenu)