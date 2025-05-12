import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddTransactions = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    amount: '',
    description: '',
    type: 1
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
    console.log(state);
    axios.post('http://localhost:9090/transaction/post/' + id, state)
      .then((res) => {
        console.log(res);
        navigate('/transaction/' + id);
        const apiUrl = 'http://localhost:9090/transaction/value/' + id; // Replace with your Spring Boot API URL
        axios.post(apiUrl, id)
        toast.success('Transaction created !', {
          position: toast.POSITION.TOP_RIGHT
      });
      })
      .then((res) => {
        console.log(res);
        navigate('/transaction/' + id);
        const expenseUrl = 'http://localhost:9090/transaction/expense/' + id; // Replace with your Spring Boot API URL
        axios.post(expenseUrl, id)
      })
      .then((res) => {
        console.log(res);
        navigate('/transaction/' + id);
        const salaryurl = 'http://localhost:9090/transaction/salary/' + id; // Replace with your Spring Boot API URL
        axios.post(salaryurl, id)
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  }

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/transaction/${id}`} className="btn btn-light">
              Back to Transactions
            </Link>
            <h4 className="display-4 text-center">Add New Transaction</h4>
            <p className="lead text-center">UBL Account</p>
            <form onSubmit={submitHandler}>

              <div className="form-group">
                <input
                  type="number"
                  name="amount"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  placeholder="Amount"
                  value={state.amount}
                />
              </div>

              <div className="form-group">
                <input
                  textarea
                  type="text"
                  name="description"
                  onChange={changeHandler}
                  className="form-control form-control-lg"
                  placeholder="Description"
                  value={state.description}
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Transaction Type : </label>
                <div className="form-check form-check-inline">
                  <input onChange={changeHandler} checked className="form-check-input" type="radio" name="type" id="income" value={1} selected="true" />
                  <label className="form-check-label" for="income">Income</label>
                </div>
                <div className="form-check form-check-inline">
                  <input onChange={changeHandler} className="form-check-input" type="radio" name="type" id="expense" value={2} />
                  <label className="form-check-label" for="expense">Expense</label>
                </div>
              </div>
              {/* <h6>Transaction Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" />
                        </div> */}
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AddTransactions;
