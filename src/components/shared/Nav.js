import { useNavigate, Link } from 'react-router-dom';

const Nav  = () => {

    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        window.location.href="/"
    }
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Expense Manager
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/createmonthwallet">
                                        Create Wallet
                                    </Link>
                                </li>
                            </ul>
                           

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
};

export default Nav;
