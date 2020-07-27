import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <section className="section-padding-top pb-2">
                    <div className="container">
                        <div className="input-form-area">
                            <h1>Welcome</h1>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null)(Home)