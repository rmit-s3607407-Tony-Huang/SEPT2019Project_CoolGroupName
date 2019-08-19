package com.sept.rest.webservices.restfulwebservices.transactions;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Transaction {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String username2;
	private Date date;
	private boolean isPending;
	private double amount;
	
	public Transaction() {
		
	}
	
	public Transaction(long id, String username, String username2, Date date, boolean isPending, double amount) {
		super();
		this.id = id;
		this.username = username;
		this.username2 = username2;
		this.date = date;
		this.isPending = isPending;
		this.amount = amount;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername1() {
		return username;
	}
	
	public void setUsername1(String username) {
		this.username = username;
	}
	
	public String getUsername2() {
		return username2;
	}
	
	public void setUsername2(String username2) {
		this.username2 = username2;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public boolean getIsPending() {
		return isPending;
	}
	
	public void setIsPending(boolean isPending) {
		this.isPending = isPending;
	}
	
	public double getAmount() {
		return amount;
	}
	
	public void setAmount(double amount) {
		this.amount = amount;
	}
 
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Transaction other = (Transaction) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
}