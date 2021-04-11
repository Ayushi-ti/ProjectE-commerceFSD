package com.demo.service;



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
		
		boolean a=customerRepository.findByemail(email).isEmpty();
		
		boolean b=customerRepository.findBypassword(password).isEmpty();
	
		if(a==true || b==true)
		{
			return false;
		}
		return true;
	
		
	}
	

}
 