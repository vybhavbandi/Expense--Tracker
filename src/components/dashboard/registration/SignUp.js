import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setState(state => ({
            ...state,
            [name]: value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:9090/users/post', state)
            .then((res) => {
                navigate('/login');
                toast.success('Signed up !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch((err) => {
                alert("Error");
            });
    }

    return (
        <div class="register">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <h1 class="display-4 text-center">Sign Up</h1>
                        <p class="lead text-center">Create your Account</p>
                        <form onSubmit={submitHandler}>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={changeHandler}
                                    className="form-control form-control-lg"
                                    placeholder="First Name"
                                    value={state.first_name}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="last_name"
                                    onChange={changeHandler}
                                    className="form-control form-control-lg"
                                    placeholder="Last Name"
                                    value={state.last_name}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={changeHandler}
                                    className="form-control form-control-lg"
                                    placeholder="Mobile Number"
                                    value={state.phone}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={changeHandler}
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    value={state.email}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    value={state.password}
                                />
                            </div>




                            <input type="submit" class="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;