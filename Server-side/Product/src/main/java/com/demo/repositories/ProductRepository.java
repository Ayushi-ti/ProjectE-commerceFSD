package com.demo.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.demo.entities.Product;

public interface ProductRepository extends CrudRepository<Product,Integer> {
	//List<Product> findByName(String name);

}