package com.sept.rest.webservices.restfulwebservices.transactions;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TransactionHardcodedService {

	private static List<Transaction> transactions = new ArrayList<>();
	private static long idCounter = 0;

	static {
		transactions.add(new Transaction(++idCounter, "sept", "EASI", new Date(), true, -35.68));
		transactions.add(new Transaction(++idCounter, "sept", "Iris Sun", new Date(), false, 300.00));
		transactions.add(new Transaction(++idCounter, "sept", "Eureka Pty Ltd", new Date(), false, -153.64));
		transactions.add(new Transaction(++idCounter, "sept", "ATM at Bourke Street", new Date(), false, -150.00));
	}

	public List<Transaction> findAll() {
		return transactions;
	}
	
	public Transaction save(Transaction transaction) {
		if(transaction.getId()==-1 || transaction.getId()==0) {
			transaction.setId(++idCounter);
			transactions.add(transaction);
		} else {
			deleteById(transaction.getId());
			transactions.add(transaction);
		}
		return transaction;
	}

	public Transaction deleteById(long id) {
		Transaction transaction = findById(id);

		if (transaction == null)
			return null;

		if (transactions.remove(transaction)) {
			return transaction;
		}

		return null;
	}

	public Transaction findById(long id) {
		for (Transaction transaction : transactions) {
			if (transaction.getId() == id) {
				return transaction;
			}
		}

		return null;
	}
}