import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTransactions = () => {

    const navigate = useNavigate();

    const { id, tId } = useParams();
    const [data, setData] = useState({});

    const getDetails = async () => {
        await axios.get('http://localhost:9090/transaction/get/' + id +'/' + tId)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getDetails();
    }, []);


    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData(state => ({
            ...state,
            [name]: value
        }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const updateData = await axios.put('http://localhost:9090/transaction/put/' + id + '/' + tId, data);
        if (updateData.status === 200) {
            navigate('/transaction/' + id);
            const apiUrl = 'http://localhost:9090/transaction/value/' + id; // Replace with your Spring Boot API URL
            axios.post(apiUrl, id)
            const expenseUrl = 'http://localhost:9090/transaction/expense/' + id; // Replace with your Spring Boot API URL
                axios.post(expenseUrl, id)
            const salaryurl = 'http://localhost:9090/transaction/salary/' + id; // Replace with your Spring Boot API URL
                axios.post(salaryurl, id)
                toast.info('Transaction updated !', {
                    position: toast.POSITION.TOP_RIGHT
                });
        }
    }

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/transaction" className="btn btn-light">
                            Back to Wallet
                        </Link>
                        <h4 className="display-4 text-center">Update Transaction</h4>
                        <p className="lead text-center">UBL Account</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="amount"
                                    value={data.amount}
                                    onChange={e => setData({ ...data, amount: e.target.value })}
                                    className="form-control form-control-lg"
                                    placeholder="Amount"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={e => setData({ ...data, description: e.target.value })}
                                    className="form-control form-control-lg"
                                    placeholder="Description"
                                />
                            </div>
                           
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Transaction Type : </label>
                                <div className="form-check form-check-inline">
                                    <input checked className="form-check-input" type="radio" name="type" id="income" value={1}
                                    onChange={e => setData({ ...data, type: e.target.value })} selected="true" />
                                    <label className="form-check-label" for="income">Income</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="type" id="expense" value={2}
                                    onChange={e => setData({ ...data, type: e.target.value })} />
                                    <label className="form-check-label" for="expense">Expense</label>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UpdateTransactions;
