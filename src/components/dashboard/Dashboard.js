import React, { useEffect, useState } from 'react'
import DashboardItem from './DashboardItem'
import axios from 'axios';
import { toast } from 'react-toastify';
//import "./Dashboard.css"

const URL = 'http://localhost:9090/monthwallet/get';

const Dashboard =()=> {
    const [items,setItems] = useState([]);

    const getItems = async () =>{
        const response = await axios.get(URL);

        const data = response.data;
        setItems(data);
    }

    useEffect(() =>{
        getItems();
    },[]);

    const deleteMonthWallet = async (id) => {
        const data = await axios.delete('http://localhost:9090/monthwallet/delete/' + id);
        console.log(data);
        
        const itemsData = items.filter((item) => item.id !== id);
        setItems(itemsData);
        toast.warning('Wallet deleted !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

        return (

            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-warning text-white">
                                    <h1>MY WALLETS</h1>
                                </div>
                            </div>
                            <hr />

                            {items?.length !== 0 ? (
                                items.map(item =>(<DashboardItem deleteMonthWallet={deleteMonthWallet} item={item} key={item.id}/>))
                            ):<h1>Details Not Found!</h1>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Dashboard
