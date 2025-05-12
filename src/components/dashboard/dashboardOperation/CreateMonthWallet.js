import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateMonthWallet  = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '',
    accountNumber: '',
    description: '',
    priority: ''
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
    const userId = JSON.parse(localStorage.getItem('user')).id;
    axios.post('http://localhost:9090/monthwallet/post', {...state,'user_id':userId})
      .then((res) => {
        navigate('/Dashboard');
        toast.info('New wallet created !', {
          position: toast.POSITION.TOP_RIGHT
      });
      })
      .catch((err) => {
        alert("Error");
      });
  }

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create Month Wallet</h5>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  placeholder="Account Name"
                  value={state.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="accountNumber"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  placeholder="Account No"
                  value={state.accountNumber}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  placeholder="Description"
                  value={state.description}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  onChange={changeHandler}
                  value={state.priority}
                >
                  <option>Display Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <input
                type="submit"
                className="btn btn-dark btn-block mt-4" value="Create"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMonthWallet;