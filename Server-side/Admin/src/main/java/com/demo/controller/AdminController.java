package com.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.demo.entities.Customer;
import com.demo.entities.Product;
import com.demo.service.AdminService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

@RestController
@RequestMapping("/admin")
@EnableCircuitBreaker
public class AdminController {

	@Autowired
	AdminService adminService;
	@Autowired
	RestTemplate restTemplate;
//view all products
//	localhost:5959/admin/products
	@GetMapping("/products")
	@HystrixCommand(fallbackMethod = "findProductsFallback", commandProperties = {
			@HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "5000"),
			@HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "4"),
			@HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
			@HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "5000") })

	public List<Product> findProducts() {

		ResponseEntity<List<Product>> response = restTemplate.exchange("http://PRODUCT-SERVICE/products",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Product>>() {
				});

		List<Product> products = response.getBody();

		return products;

	}
	
	public List<Product> findProductsFallback(){
		Product product = new Product();


		List<Product> products = new ArrayList<Product>();
		products.add(product);
		return products;
	}

	
	
	
//view all customers
//	localhost:5959/admin/users
	@GetMapping("/users")
	@HystrixCommand(fallbackMethod = "findUsersFallback", commandProperties = {
			@HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "5000"),
			@HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "4"),
			@HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
			@HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "5000") })

	public List<Customer> findUsers() {

		ResponseEntity<List<Customer>> response = restTemplate.exchange("http://CUSTOMER-SERVICE/customers/show",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Customer>>() {
				});

		List<Customer> users = response.getBody();

		return users;

	}
	
	public List<Customer> findUsersFallback(){
		Customer user = new Customer();


		List<Customer> users = new ArrayList<Customer>();
		users.add(user);
		return users;
	}
	
	



}
