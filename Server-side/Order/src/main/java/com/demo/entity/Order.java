package com.demo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderid;
	private int customerid;
	private int total_amount;
	private String status;
	private int dateOfOrder;//YYYY-MM-DD
	
	public int getDateOfOrder() {
		return dateOfOrder;
	}
	public void setDateOfOrder(int dateOfOrder) {
		this.dateOfOrder = dateOfOrder;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(int total_amount) {
		this.total_amount = total_amount;
	}
	public int getOrderid()
	{
		return orderid;
	}
	public void setOrderid(int orderid)
	{
		this.orderid = orderid;
	}
	public int getCustomerid()
	{
		return customerid;
	}
	public void setCustomerid(int customerid)
	{
		this.customerid = customerid;
	}

}