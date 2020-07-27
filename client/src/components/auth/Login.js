import React, { Component, Fragment } from 'react';
import { login } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { authUser } from '../../utils/authUser';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isWait: false,
        }
    }
    componentDidMount() {
        if (authUser()) {
            this.props.history.push('/');
        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = async event => {
        event.preventDefault()
        this.setState({ isWait: true })
        let { login, history } = this.props
        let response = await login(this.state)
        if (response) history.push('/')
        this.setState({ isWait: false })
    }
    render() {
        let { email, password, isWait } = this.state

        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container">
                        <div className="input-form-area">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 offset-3">
                                    <Form onSubmit={this.submitHandler}>
                                        <Form.Group>
                                            <Form.Label>Email or Phone *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Email or Phone"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password *</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={this.changeHandler}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formHorizontalCheck">
                                            <Form.Check label="Remember me" />
                                        </Form.Group>

                                        <Button type="submit" variant="dark" size="lg" block>
                                            {isWait ? `Please Wait...` : `Login`}
                                        </Button>
                                    </Form>

                                    <p className="mt-3">
                                        <span className="float-left">
                                            Don't have account? <Link to='/register'>Register here...</Link>
                                        </span>
                                        <span className="float-right">
                                            <Link to="/forgot-password">Forgot password?</Link>
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
export default connect(null, { login })(Login)