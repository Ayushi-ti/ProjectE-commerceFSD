package com.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Customer;
@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer>  {

	List<Customer> findByemail(String email);

	List<Customer> findBypassword(String password);

	

	//boolean existsByEmail(String email);

	//boolean existsByPassword(String password);

}
