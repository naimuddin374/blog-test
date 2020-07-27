import React, { Component, Fragment } from 'react';
import { storeBlog } from '../../store/actions/blogActions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            isWait: false,
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
        let { storeBlog, history } = this.props
        let response = await this.props.storeBlog(this.state)
        if (response) history.push('/blog/list')
        this.setState({ isWait: false })
    }
    render() {
        let { title, description, isWait } = this.state

        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container">
                        <div className="input-form-area">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 offset-3">
                                    <Form onSubmit={this.submitHandler}>
                                        <Form.Group>
                                            <Form.Label>Title *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                value={title}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Title"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Description *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="description"
                                                value={description}
                                                onChange={this.changeHandler}
                                                rows='10'
                                            />
                                        </Form.Group>
                                        <Button type="submit" variant="dark" size="lg" block>
                                            {isWait ? `Please Wait...` : `Submit`}
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null, { storeBlog })(BlogCreate)