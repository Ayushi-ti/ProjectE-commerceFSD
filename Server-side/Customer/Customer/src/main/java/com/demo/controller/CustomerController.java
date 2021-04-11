package com.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.demo.entity.Customer;
import com.demo.service.CustomerService;

@RestController
@RequestMapping("customers")
public class CustomerController {
	@Autowired
	CustomerService customerService;
	@PostMapping("/register/{customername}/{email}/{password}/{address}/{phno}")
	public Customer registercustomer(@PathVariable String customername,@PathVariable String email,@PathVariable String password,@PathVariable String address,@PathVariable long phno) {
		Customer customer=new Customer();
		
		customer.setCustomerName(customername);
		customer.setEmail(email);
		customer.setPassword(password);
		customer.setAddress(address);
		customer.setPhno(phno);
		
		return customerService.savecustomer(customer);
		
		
	}


@GetMapping("/login/{email}/{password}")
	//@GetMapping("/{email}")
public boolean logincustomer(@PathVariable String email,@PathVariable String password)
	//public List<Customer> logincustomer(@PathVariable String email)
{
	
	return customerService.verifycustomer(email, password);
	//return customerService.verifycustomer(email);		
}
}