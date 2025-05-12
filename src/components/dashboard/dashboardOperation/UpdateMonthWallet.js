import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';


const UpdateMonthWallet  = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [data, setData] = useState({});

const getDetails = async () =>{
    await axios.get('http://localhost:9090/monthwallet/get/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
}
  
  useEffect(()=> {
   getDetails();
  },[]);


  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData(state => ({
      ...state,
      [name]: value
    }))
  }

 
const handleSubmit = async (event) => {
    event.preventDefault();
    const updateData = await axios.put('http://localhost:9090/monthwallet/put/'+id, data);
    if(updateData.status === 200){
      navigate('/dashboard');
      toast.info('Wallet Updated !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }

  }

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Month Wallet</h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={e => setData ({...data, name:e.target.value})}
                  className="form-control form-control-lg"
                  placeholder="Account Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="accountNumber"
                  onChange={e => setData ({...data, accountNumber:e.target.value})}
                  value={data.accountNumber}
                  className="form-control form-control-lg"
                  placeholder="Account No" 
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  value={data.description}
                  onChange={e => setData ({...data, description:e.target.value})}
                  className="form-control form-control-lg"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  value={data.priority}
                  onChange={e => setData ({...data, priority:e.target.value})}
                >
                  <option value={3}>Display Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <input
                type="submit"
                className="btn btn-dark btn-block mt-4" value="Update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMonthWallet;