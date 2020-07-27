import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

/*************************Import Layout********************************/
import Home from './blog/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import PageNotFound from './layout/PageNotFound';
import BlogCreate from './blog/BlogCreate';
import BlogList from './blog/BlogList';


class Routes extends Component {
    state = {
        isAuth: false,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.isAuth === prevState.isAuth) return null
        return {
            isAuth: nextProps.auth.isAuth,
        }
    }
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path='/blog/list' exact component={BlogList} history={this.props.history} />
                    <Route path='/blog/create' exact component={BlogCreate} history={this.props.history} />
                    <Route path='/register' exact component={Register} history={this.props.history} />
                    <Route path='/login' exact component={Login} history={this.props.history} />
                    <Route path='/' exact component={Home} history={this.props.history} />
                    <Route path='/*' exact component={PageNotFound} history={this.props.history} />
                </Switch>
            </Fragment >
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(Routes)