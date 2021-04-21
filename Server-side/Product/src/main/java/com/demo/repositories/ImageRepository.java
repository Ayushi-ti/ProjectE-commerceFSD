package com.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.demo.entities.Category;
import com.demo.entities.ImageModel;
@CrossOrigin(origins = {"http://localhost:4200"}) 
public interface ImageRepository extends JpaRepository<ImageModel, Integer> {

	Optional<ImageModel> findByName(String name);
	ImageModel findByImageid(int imageid);


}