import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { logout } from '../../store/actions/authActions';

class Header extends Component {
    state = {
        isAuth: false,
        user: {}
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.isAuth) === JSON.stringify(prevState.isAuth)) return null
        return {
            isAuth: nextProps.auth.isAuth,
            user: nextProps.auth.user
        }
    }
    render() {
        let { isAuth, user } = this.state

        return (
            <div className="container-fluid">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to='#blank'>BLOG</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Link className='mx-5' to='/login'>Login</Link>
                        <Link className='mx-5' to='/register'>Register</Link>

                        <Link className='mx-5' to='/blog/list'>Blog List</Link>
                        <Nav>
                            {isAuth &&
                                <NavDropdown title={user.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item to={`/profile/${user._id}/${user.name}`}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#blank" onClick={() => this.props.logout(this.props.history)}>Logout</NavDropdown.Item>
                                </NavDropdown>}
                            {/* {isAuth && <Link to={`/profile/${user._id}/${user.name}`}>{user.name}</Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps, { logout })(Header)