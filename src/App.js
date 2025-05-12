
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import CreateMonthWallet from './components/dashboard/dashboardOperation/CreateMonthWallet';
import UpdateMonthWallet from './components/dashboard/dashboardOperation/UpdateMonthWallet';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/transactionoperation/AddTransaction';
import UpdateTransaction from './components/transactions/transactionoperation/UpdateTransaction';
import SignUp from './components/dashboard/registration/SignUp';
import Login from './components/dashboard/registration/Login';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [user,setUser] = useState({});

  useEffect(() =>{
    if(localStorage.getItem('user') !== null){
      setUser(JSON.parse(localStorage.getItem('user')));
    }

  },[]);

  return (
    <div>
    <Router>
      {Object.keys(user).length === 0 ?(<Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
      </Routes>):<>
          <Nav />
          <Routes>
          <Route path="/" exact element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createmonthwallet" element={<CreateMonthWallet />} />
            <Route path="/updatemonthwallet/:id" element={<UpdateMonthWallet />} />
            <Route path="/transaction/:id" element={<Transaction />} />
            <Route path="/addtransaction/:id" element={<AddTransaction />} />
            <Route path="/updatetransaction/:id/:tId" element={<UpdateTransaction />} />
          </Routes>
      </>}
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
