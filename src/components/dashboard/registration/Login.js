import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
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

        axios.post('http://localhost:9090/users/login', state)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data))
                console.log(JSON.stringify(res.data))
                window.location.href="/dashboard"
                toast.success('Logged in !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch((err) => {
                alert("Error");
            });
    }

    return (
        <div class="login">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <h1 class="display-4 text-center">Log In</h1>
                        <form onSubmit={submitHandler}>
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

export default Login;