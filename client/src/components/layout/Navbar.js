import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';


class Navbar extends Component {
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
        let { user } = this.props
        let userId = user.type === 2 ? user.agentId : user._id
        return (
            <Fragment>
                <div className="menu-wrapper" ref={node => this.node = node}>
                    <div className="container">
                        <div className="row">

                            {user.type === 3 &&
                                <div className="col-lg-3 text-center">
                                    <h6 className="mb-0">Ticket</h6>
                                    <hr />
                                    <ul className="menu-list" onClick={this.props.menuHandler}>
                                        <li><Link to={`/backend/admin/ticket/booking`}>Booking</Link></li>
                                        <li><Link to={`/backend/admin/ticket/on-hold`}>On Hold</Link></li>
                                        <li><Link to={`/backend/admin/ticket/ticket`}>Ticketed</Link></li>
                                        <li><Link to={`/backend/admin/ticket/in-process`}>In Process</Link></li>
                                        <li><Link to={`/backend/admin/ticket/expire`}>Expire</Link></li>
                                        <li><Link to={`/backend/admin/ticket/unconfirmed`}>Unconfirmed</Link></li>
                                        <li><Link to={`/backend/admin/ticket/cancelled`}>Cancelled</Link></li>
                                        <li><Link to={`/backend/admin/ticket/refund`}>Refund</Link></li>
                                        <li><Link to={`/backend/admin/ticket/void`}>Void</Link></li>
                                        <li><Link to={`/backend/admin/ticket/no-show`}>No-Show</Link></li>
                                    </ul>
                                </div>
                            }

                            {user.type === 3 &&
                                <div className="col-lg-3 text-center" onClick={this.props.menuHandler}>
                                    <h6 className="mb-0">User Info</h6>
                                    <hr />
                                    <ul className="menu-list">
                                        <li><Link to="/backend/admin/user/b2b">B2B User</Link></li>
                                        <li><Link to="/backend/admin/user/b2c">B2C User</Link></li>
                                        <li><Link to="/backend/admin/user/moderators">Moderators</Link></li>
                                        <li><Link to="/backend/admin/user/all">All Users</Link></li>
                                    </ul>
                                </div>}


                            {user.type === 3 &&
                                <div className="col-lg-3 text-center" onClick={this.props.menuHandler}>
                                    <h6 className="mb-0">Accounts</h6>
                                    <hr />
                                    <ul className="menu-list">
                                        <li><Link to="/backend/admin/statements">Statement</Link></li>
                                        <li><Link to="/backend/admin/bonus">Incentive N Bonus</Link></li>
                                        <li><Link to="/backend/best/seller">Best Seller</Link></li>
                                        <li><Link to="/backend/agent/financial">Agent Balance</Link></li>
                                        <li><Link to="/backend/admin/expense">Expense</Link></li>
                                        <li><Link to="/backend/admin/deposits">Deposit</Link></li>
                                        <li><Link to="/backend/admin/deposits">Daily Account Info</Link></li>
                                        <li><Link to="/backend/admin/iata-record">Issuer IATA Record</Link></li>
                                        <li><Link to="/backend/agent/commission">Agent Commission</Link></li>
                                    </ul>
                                </div>}


                            {user.type === 3 && <div className="col-lg-3 text-center" onClick={this.props.menuHandler}>
                                <h6 className="mb-0">Others</h6>
                                <hr />
                                <ul className="menu-list">
                                    <li><Link to={'/backend/counter'}>Counter</Link></li>
                                    <li><Link to="/backend/request">Request & Order</Link></li>
                                    <li><Link to="/backend/admin/customer">Customer List</Link></li>
                                    <li><Link to="/backend/airports">Airport</Link></li>
                                    <li><Link to="/backend/carrier/manage">Airline Manage</Link></li>
                                    <li><Link to="/backend/admin/reports">Financial Reports</Link></li>
                                    <li><Link to="/backend/airlines">Airline</Link></li>
                                    <li><Link to="/backend/countries">Country</Link></li>
                                    <li><Link to="/backend/basic-info">Contact Information</Link></li>
                                    <li><Link to="/backend/home/slider">Slider</Link></li>
                                    <li><Link to="/backend/home/package">Package</Link></li>
                                    <li><Link to="/backend/home/marquee">Marquee</Link></li>
                                    <li><Link to="/backend/home/service">Service</Link></li>
                                    <li><Link to="/backend/home/useful-link">Useful Link</Link></li>
                                    <li><Link to="/backend/home/footer-logo">Footer Logo</Link></li>
                                </ul>
                            </div>}




                            {user.type !== 3 &&
                                <div className="col-lg-3 text-center">
                                    <h6 className="mb-0">Ticket</h6>
                                    <hr />
                                    <ul className="menu-list" onClick={this.props.menuHandler}>
                                        <li><Link to={`/backend/ticket/booking/${userId}`}>Booking</Link></li>
                                        <li><Link to={`/backend/ticket/on-hold/${userId}`}>On Hold</Link></li>
                                        <li><Link to={`/backend/ticket/ticket/${userId}`}>Ticketed</Link></li>
                                        <li><Link to={`/backend/ticket/in-process/${userId}`}>In Process</Link></li>
                                        <li><Link to={`/backend/ticket/expire/${userId}`}>Expire</Link></li>
                                        <li><Link to={`/backend/ticket/unconfirmed/${userId}`}>Unconfirmed</Link></li>
                                        <li><Link to={`/backend/ticket/cancelled/${userId}`}>Cancelled</Link></li>
                                        <li><Link to={`/backend/ticket/refund/${userId}`}>Refund</Link></li>
                                        <li><Link to={`/backend/ticket/void/${userId}`}>Void</Link></li>
                                        <li><Link to={`/backend/ticket/no-show/${userId}`}>No-Show</Link></li>
                                    </ul>
                                </div>}

                            {user.type !== 3 &&
                                <div className="col-lg-3 text-center" onClick={this.props.menuHandler}>
                                    <h6 className="mb-0">Accounts</h6>
                                    <hr />
                                    <ul className="menu-list">
                                        <li><Link to={`/backend/statements/${userId}`}>Statement</Link></li>
                                        <li><Link to={`/backend/deposits/${userId}`}>Deposit</Link></li>
                                    </ul>
                                </div>}


                            {user.type === 2 &&
                                <div className="col-lg-3 text-center" onClick={this.props.menuHandler}>
                                    <h6 className="mb-0">Others</h6>
                                    <hr />
                                    <ul className="menu-list">
                                        <li><Link to={`/backend/counter/${userId}`}>Counter</Link></li>
                                        <li><Link to={`/backend/customer/${userId}`}>Customer List</Link></li>
                                        <li><Link to={`/backend/bonus/${userId}`}>Incentive N Bonus List</Link></li>
                                    </ul>
                                </div>}


                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
const mapStateToProps = state => ({
    user: state.auth.user,
})
export default connect(mapStateToProps, { logout })(Navbar)