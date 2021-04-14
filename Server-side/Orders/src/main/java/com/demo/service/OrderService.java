package com.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Order;
import com.demo.repository.OrderRepository;
@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepository;
	
	public int saveorder(Order order)
	{
		 orderRepository.save(order);
		 return order.getOrderid();
		
	}
	public boolean updateorderstatus(int orderid,Order order)
	{
		Order obj1=orderRepository.findByorderid(orderid);
		if(order.getStatus()!=null) {
			obj1.setStatus(order.getStatus());
		orderRepository.save(obj1);
		return obj1!=null;}
		return false;
			
	}
	
	public Order findOrderByID(int orderid)
	{
		return orderRepository.findByorderid(orderid);
	}
	public List<Order> displayorder()
	{
	  Iterable<Order> order=orderRepository.findAll();
	  Iterator<Order> iterator=order.iterator();
	  List<Order> orderlist=new ArrayList<Order>();
		while(iterator.hasNext()) {
			orderlist.add(iterator.next());
		}
		return orderlist;
	}
	
	public boolean deleteorder(int orderid)
	{
		Order order= orderRepository.findByorderid(orderid);
			if(order!=null)
			{
				orderRepository.delete(order);
				return true;
			} 
			return false;
		}
	}
	

