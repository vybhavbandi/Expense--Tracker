import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Transaction = (props) => {

    const { id } = useParams();
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await axios.get('http://localhost:9090/transaction/get/' + id);

        const data = response.data;
        setItems(data);
    }

    console.log(items);

    useEffect(() => {
        getItems();
    }, []);

    const deleteTransaction = async (itemId) => {
        const data = await axios.delete('http://localhost:9090/transaction/delete/' + id + '/' + itemId);
        console.log(data);
        const apiUrl = 'http://localhost:9090/transaction/value/' + id; // Replace with your Spring Boot API URL
        axios.post(apiUrl, id)
        const expenseUrl = 'http://localhost:9090/transaction/expense/' + id; // Replace with your Spring Boot API URL
        axios.post(expenseUrl, id)
        const salaryurl = 'http://localhost:9090/transaction/salary/' + id; // Replace with your Spring Boot API URL
        axios.post(salaryurl, id)
        const itemsData = items.filter((item) => item.id !== itemId);
        setItems(itemsData);
        toast.warning('Transaction deleted !', {
            position: toast.POSITION.TOP_RIGHT
        });

    }


    return (
        <div className="container">
            <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                Back
            </Link>
            <Link to={`/addtransaction/${id}`} className="btn btn-info btn-lg mb-3">
                <i className="fas fa-plus-circle"> Record new Transaction</i>
            </Link>
            <br />
            <hr />

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Amount</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {items !== null ?
                        items.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.transactionDate}</td>
                                <td>{item.description}</td>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <Link to={`/updatetransaction/${id}/${item.id}`} className="text-info" ><i className="fas fa-edit fa-2x"></i></Link>
                                    <div className="text-danger" onClick={() => deleteTransaction(item.id)}><i className="fas fa-trash fa-2x"></i></div>
                                </td>
                            </tr>
                        })
                        : <h1>No transaction available</h1>
                    }

                </tbody>
            </table>

        </div>
    )

}

export default Transaction
