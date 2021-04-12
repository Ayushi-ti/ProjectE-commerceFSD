package com.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Product;
import com.demo.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;

	public List<Product> findAllProducts(){
		Iterable<Product> iterable =productRepository.findAll();
		Iterator<Product> iterator=iterable.iterator();
		List<Product> products =new ArrayList<Product>();
		while(iterator.hasNext()) {
			products.add(iterator.next());
		}
		return products;
	}


	public Product findProductbyId(int id) {
		Optional<Product> optional = productRepository.findById(id);
		Product product = optional.orElse(null);
		return product;
	}

	
	public void deleteProduct(int id) {
		productRepository.deleteById(id);
	}

	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}

}
