import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="section-padding-top">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <h3>FOOTER</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 text-center">
                                <p className="copy-right-text">Copyright &copy; 2020 <a href="#blank">E-ticketing</a> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer