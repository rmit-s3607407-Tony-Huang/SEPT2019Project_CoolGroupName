import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.rmit.edu.au/" className="navbar-brand">
                        <img src="https://cij.org.au/cms/wp-content/uploads/2018/09/rmit-logo-2.png" width="100" height="34"></img>
                        RMIT Marketplace</a></div>



                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/SEPT">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Stationary</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Books</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Electronics</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Other</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">View Account</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">View Transactions</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Manage Ads</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Messages</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Settings</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent