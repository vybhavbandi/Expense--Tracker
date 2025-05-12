import React from 'react'
import { Link } from 'react-router-dom';

const DashboardItem = (props) => {

    return (
        <div className="container" style={{ width: '70%' }} >
            <div className="card card-body bg-light mb-3" >
                <div className="row" style={{ backgroundColor: '#ECE9F0' }}>
                    <div className="col-lg-4 col-md-3 col-6">
                        <p>Account Number: {props.item.accountNumber}</p>
                        <p>Description: {props.item.description}</p>
                    </div>
                    <div className="col-lg-4 col-md-3 col-6 text-center" style={{
                        boxSizing: 'content-box'
                    }}>
                        <h1>{props.item.name}</h1>
                        <h2 style={{ color: 'green' }}>Total Balance - {props.item.monthBalance}</h2>
                        <h2 style={{ color: 'red' }}>Total Expense -  {props.item.monthExpense}</h2>
                        <h2 style={{ color: 'orange' }}>Total Salaries -  {props.item.monthSalary}</h2>
                    </div>
                    <div className="col-md-4 col-12 d-lg-block">
                        <ul className="list-group">
                            <Link to={`/transaction/${props.item.id}`}>
                                <li className="list-group-item board text-success">
                                    <i className="fa fa-flag-checkered pr-1"> View Transactions </i>
                                </li>
                            </Link>
                            <Link to={`/updateMonthWallet/${props.item.id}`}>
                                <li className="list-group-item update text-info">
                                    <i className="fa fa-edit pr-1"> Update Month Wallet</i>
                                </li>
                            </Link>

                            <button onClick={() => props.deleteMonthWallet(props.item.id)} className="list-group-item delete text-danger fa fa-minus-circle pr-1">Delete</button>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardItem;

