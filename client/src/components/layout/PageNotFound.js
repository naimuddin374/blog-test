import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <Fragment>
                <section className="section-padding-top pb-5 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-2">
                                <h1>OOPS 404 Page Not Found!</h1>
                                <Link to='/'>Go to home</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default PageNotFound