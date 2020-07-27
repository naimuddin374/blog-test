import React, { Component, Fragment } from 'react';
import { register } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import registerValidate from '../validators/registerValidate';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            email: '',
            password: '',
            confirmPassword: '',
            isWait: false,
            isError: false,
            validation: {}
        }
    }
    changeHandler = event => {
        let { validation } = this.state

        delete validation[event.target.name]
        this.setState({
            [event.target.name]: event.target.value,
            validation
        })
    }
    submitHandler = async event => {
        event.preventDefault()
        let validate = registerValidate(this.state)
        if (Object.keys(validate).length !== 0) {
            this.setState({ validation: validate, isError: true })
            return false
        }

        this.setState({ isWait: true })
        let { register, history } = this.props
        let response = await register(this.state)
        if (response) history.push('/')
        this.setState({ isWait: false })
    }
    render() {
        let { name, contact, email, password, confirmPassword, isWait, isError, validation } = this.state

        return (
            <Fragment>
                <section className="section-padding-top pb-2">
                    <div className="container">
                        <div className="input-form-area">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 offset-3">
                                    <Form onSubmit={this.submitHandler}>

                                        <Form.Group>
                                            <Form.Label>Full Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Full Name"
                                                className={isError && validation.name && 'is-invalid'}
                                            />
                                            {isError && validation.name && <div className="invalid-feedback">{validation.name}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Contact Number *</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="contact"
                                                value={contact}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Contact Number"
                                                className={isError && validation.contact && 'is-invalid'}
                                            />
                                            {isError && validation.contact && <div className="invalid-feedback">{validation.contact}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Email address *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={this.changeHandler}
                                                autoComplete="false"
                                                placeholder="Enter Email"
                                                className={isError && validation.email && 'is-invalid'}
                                            />
                                            {isError && validation.email && <div className="invalid-feedback">{validation.email}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Password *</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Password"
                                                className={isError && validation.password && 'is-invalid'}
                                            />
                                            {isError && validation.password && <div className="invalid-feedback">{validation.password}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Confirm Password *</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={this.changeHandler}
                                                className="form-control"
                                                placeholder="Enter Confirm Password"
                                                className={isError && validation.confirmPassword && 'is-invalid'}
                                            />
                                            {isError && validation.confirmPassword && <div className="invalid-feedback">{validation.confirmPassword}</div>}
                                        </Form.Group>


                                        <Button type="submit" variant="dark" size="lg" block>
                                            {isWait ? `Please Wait...` : `Submit`}
                                        </Button>
                                    </Form>

                                    <p className="mt-3">
                                        <span className="float-left">
                                            Already have account? <Link to='/login'>Login here...</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null, { register })(Register)