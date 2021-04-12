package com.demo.controller;

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


import com.demo.entities.Product;
import com.demo.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
//	http://localhost:5555/products
	@PostMapping()
	public Product saveProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}

//	http://localhost:5555/products
	@GetMapping()
	public List<Product> findAllProducts() {
		return productService.findAllProducts();
	}

//	http://localhost:5555/products/
	@GetMapping("/{id}")
	public Product findProductbyId(@PathVariable int id) {
		return productService.findProductbyId(id);
	}

//	http://localhost:5555/products/
	@DeleteMapping("/{id}")
	public boolean deleteProduct(@PathVariable int id) {
		productService.deleteProduct(id);
		return true;
	}
	
//	@PutMapping("/{id}")
//	public boolean updateBook(@PathVariable int id,@RequestBody Book book) {
//		return bookService.editBook(id, book);
//	}

}
