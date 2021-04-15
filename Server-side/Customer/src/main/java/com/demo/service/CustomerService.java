package com.demo.service;



import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.demo.entity.Customer;
import com.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository customerRepository;
	
	public Customer savecustomer(Customer customer)
	{
		
		return customerRepository.save(customer);
	}
	
	public boolean  verifycustomer( String email,String password)
	
	{
	    Customer obj1=customerRepository.findByemail(email);
	    
		Customer obj2=customerRepository.findBypassword(password);
		if(obj1!=null && obj2!=null)
		{
			return true;
		}
		return false;
	}
	public boolean updatecustomer(String email,Customer customer)
	{
		Customer obj3=customerRepository.findByemail(email);
		
		if(obj3!=null)
		{
		if(customer.getCustomerName()!=null)
			obj3.setCustomerName(customer.getCustomerName());
		if(customer.getEmail()!=null)
			 obj3.setEmail(customer.getEmail());
		if(customer.getPassword()!=null)
			obj3.setPassword(customer.getPassword());
		if(customer.getAddress()!=null)
			obj3.setAddress(customer.getAddress());
		if(customer.getPhno()==0)
			obj3.setPhno(customer.getPhno());
		customerRepository.save(obj3);
		return obj3!=null;
		}
	
	return false;
	}
	public List<Customer> displaycustomer()
	{
	  Iterable<Customer> customer=customerRepository.findAll();
	  Iterator<Customer> iterator=customer.iterator();
	  List<Customer> customerlist=new ArrayList<Customer>();
		while(iterator.hasNext()) {
			customerlist.add(iterator.next());
		}
		return customerlist;
	}
	public Customer getCustomerEmail(String email)
	{
		Customer cust= customerRepository.findByemail(email);
		 return cust;
	}
	public boolean deletecustomer(int id)
	{
		Customer customer= customerRepository.findBycustomerId(id);
		if(customer!=null)
		{
			customerRepository.delete(customer);
			return true;
		} 
		return false;
	}
}


 