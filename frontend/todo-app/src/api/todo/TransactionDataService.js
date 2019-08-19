import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class TransactionDataService {

    retrieveAllTransactions(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${name}/transactions`);
    }

    retrieveTransaction(name, id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${name}/transactions/${id}`);
    }

    deleteTransaction(name, id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/users/${name}/transactions/${id}`);
    }

    updateTransaction(name, id, transaction) {
        //console.log('executed service')
        return axios.put(`${API_URL}/users/${name}/transactions/${id}`, transaction);
    }

    createTransaction(name, transaction) {
        //console.log('executed service')
        return axios.post(`${API_URL}/users/${name}/transactions/`, transaction);
    }

}

export default new TransactionDataService()