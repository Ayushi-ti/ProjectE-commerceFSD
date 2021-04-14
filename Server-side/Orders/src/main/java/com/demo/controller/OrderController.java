package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.demo.entity.Order;
import com.demo.service.OrderService;

@RestController
@RequestMapping("orders")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@GetMapping("/show")
	public List<Order> showorder()
	{
		return orderService.displayorder();
	}
	
	@GetMapping("/showorder/{orderid}")
	public Order getOrderByID(@PathVariable int orderid)
	{
		return orderService.findOrderByID(orderid);
	}

	@PostMapping("/save")
	public int placeOrder(@RequestBody Order order)
	{
		return orderService.saveorder(order);
		
		
	}
	@PutMapping("/update/{orderid}")
	public boolean editcustomer(@PathVariable int orderid,@RequestBody Order order)
	{
		return orderService.updateorderstatus(orderid,order);
	}
	@DeleteMapping("/remove/{orderid}")
	public boolean removecustomer(@PathVariable int orderid)
	{
		return orderService.deleteorder(orderid);
	}
	
	
}
