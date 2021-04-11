package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int CustomerId;
	private String CustomerName;
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	private String Address;
	private long Phno;

	
	public int getCustomerId() {
		return CustomerId;
	}
	public void setCustomerId(int userId) {
		CustomerId = userId;
	}
	public String getCustomerName() {
		return CustomerName;
	}
	public void setCustomerName(String userName) {
		CustomerName = userName;
	}
	
	
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public long getPhno() {
		return Phno;
	}
	public void setPhno(long phno) {
		Phno = phno;
	}
	
}
