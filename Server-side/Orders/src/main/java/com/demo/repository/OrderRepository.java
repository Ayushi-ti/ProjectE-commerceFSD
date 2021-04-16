package com.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order,Integer>  {

	public Order findByorderid(int orderid);

	
	
	

}
