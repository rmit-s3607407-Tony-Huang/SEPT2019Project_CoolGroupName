package com.spet.rest.webservices.restfulwebservices.users;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private String id;
	private String firstName;
	private String lastName;
	private double accountBalance;
	private long cardNumber;

	public User() {}
	
	public User(String id,String firstName, String lastName, double accountBalance, long cardNumber) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.accountBalance = accountBalance;
		this.cardNumber = cardNumber;
	}
	
	public String getId() {
		return id;
	}
	
	public void setID(String id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public double getAccountBalance() {
		return accountBalance;
	}
	
	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}
	
	public long getCardNumber() {
		return cardNumber;
	}
	
	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}
	
}