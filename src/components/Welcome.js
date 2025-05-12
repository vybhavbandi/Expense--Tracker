import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (

            <div className="projects">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Tracker</h1>
                                <p className="lead">
                                    Create your account to manage your daily expense and hisab kitab
                                </p>
                                <hr />
                                <Link to="/signup" className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                                </Link>
                                <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
