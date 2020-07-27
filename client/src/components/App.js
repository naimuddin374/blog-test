import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import history from '../utils/history'
import './App.css';
import './assets/scss/style.scss'

/*************************Import Layout********************************/
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './Routes';
import AlertMessage from './layout/AlertMessage';


class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <AlertMessage />
                    <div id="page-container">
                        <Header history={history} />
                        <Routes history={history} />
                    </div>
                    <Footer />
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default App