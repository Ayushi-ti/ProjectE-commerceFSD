package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.repositories.CustomerRepository;
import com.demo.repositories.ProductRepository;

@Service
public class AdminService {

	@Autowired
	ProductRepository productRepository;
	@Autowired
	CustomerRepository customerRepository;
	

}
