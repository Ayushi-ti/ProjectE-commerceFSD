package com.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.demo.entity.Customer;
import com.demo.service.CustomerService;

@RestController
@RequestMapping("customers")
@CrossOrigin(origins = {"http://localhost:62380"}) 
public class CustomerController {
	@Autowired
	CustomerService customerService;
	@PostMapping("/register")
	public Customer registercustomer(@RequestBody Customer customer) {
		
		return customerService.savecustomer(customer);
		
}
	
@GetMapping("/login/{email}/{password}")
public boolean logincustomer(@PathVariable String email,@PathVariable String password)
{
	return customerService.verifycustomer(email, password);
}
@GetMapping("/show")
public List<Customer> showcustomer()
{
	return customerService.displaycustomer();
}


@PutMapping("/update/{email}")
public boolean editcustomer(@PathVariable String email,@RequestBody Customer customer)
{
	return customerService.updatecustomer(email, customer);
}

@DeleteMapping("/remove/{id}")
public boolean removecustomer(@PathVariable int id)
{
	return customerService.deletecustomer(id);
}
}