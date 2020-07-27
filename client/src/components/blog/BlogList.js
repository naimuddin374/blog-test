import React, { Component, Fragment } from 'react';
import { getBlog } from '../../store/actions/blogActions';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';


class BlogList extends Component {
    state = {
        data: [],
        isLoading: true
    }
    async componentDidMount() {
        this.setState({
            data: await this.props.getBlog(),
            isLoading: false
        })
    }
    render() {
        let { isLoading, data } = this.state

        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container">
                        <Link className='mx-2 btn btn-dark' to='/blog/create'>Write a Blog</Link>

                        <div className='list-group'>
                            {isLoading ? <Loading /> : data.length > 0 && data.map(item =>
                                <div key={item._id} className="list-group-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.createdAt}</p>
                                    <p>{item.userId.name}</p>
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default connect(null, { getBlog })(BlogList)