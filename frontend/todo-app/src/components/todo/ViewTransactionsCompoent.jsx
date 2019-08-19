import React, { Component } from 'react'
import TransactionDataService from '../../api/todo/TransactionDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ViewTransactionsComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            transactions: [],
            message: null
        }
        this.refreshTransactions = this.refreshTransactions.bind(this)
        this.deleteTransactionClicked = this.deleteTransactionClicked.bind(this)
    }

    refreshTransactions() {
        let username = AuthenticationService.getLoggedInUserName()
        TransactionDataService.retrieveAllTransactions(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ transactions: response.data })
                }
            )
    }

    deleteTransactionClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TransactionDataService.deleteTransaction(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of transaction ${id} Successful` })
                    this.refreshTransactions()
                }
            )

    }

    render() {
        console.log('render')
        this.refreshTransactions()
        let username = AuthenticationService.getLoggedInUserName()
        return (
            <div>
                <h1>Transactions of {username}</h1>
                <div className="container">
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Transfer To/From</th>
                                <th>Transaction Date</th>
                                <th>Is Pending?</th>
                                <th>Amount</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.transactions.map(
                                    transaction =>
                                        <tr key={transaction.id}>
                                            <td>{transaction.username2}</td>
                                            <td>{moment(transaction.date).format('YYYY-MM-DD')}</td>
                                            <td>{transaction.isPending.toString()}</td>
                                            <td>{transaction.amount}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTransactionClicked(transaction.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ViewTransactionsComponent