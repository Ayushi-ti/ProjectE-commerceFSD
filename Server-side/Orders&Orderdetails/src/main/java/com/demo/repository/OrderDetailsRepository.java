package com.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.demo.entity.Order;
import com.demo.entity.OrderDetails;

public interface OrderDetailsRepository extends CrudRepository<OrderDetails,Integer> {

	
	Order findByorderid(int orderid);

	Iterable<OrderDetails> findAllByorderid(int orderid);
	

}
