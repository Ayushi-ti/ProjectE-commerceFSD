package com.demo.controller;

import java.io.IOException;
import java.util.List;

//import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import org.springframework.http.HttpStatus;



import com.demo.entities.ImageModel;

import com.demo.entities.Category;

import com.demo.entities.Product;
import com.demo.repositories.ImageRepository;
import com.demo.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = {"http://localhost:4200"}) 
public class ProductController {
	
	@Autowired
	ProductService productService;
	@Autowired
	ImageRepository imageRepository;
	
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

//	http://localhost:5555/products/{id}
	@PutMapping("/{id}")
	public boolean updateProduct(@PathVariable int id,@RequestBody Product product) {
		return productService.editProduct(id, product);
		
	
	}
	

	
	//category service
	
	@PostMapping("/save")
	public Category addCategory(@RequestBody Category category)
	{
		return productService.saveCategory(category);
	}
	
	@GetMapping("/search/{categoryid}")
	public Category getCategory(@PathVariable String categoryid)
	{
		return productService.getCategory(categoryid);
	}


//image
	
	
	    @PostMapping("/upload")
	
	    public BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
	
	
	        System.out.println("Original Image Byte Size - " + file.getBytes().length);
	
	        ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
	
	                compressBytes(file.getBytes()));
	
	       imageRepository.save(img);
	
	        return (BodyBuilder) ResponseEntity.status(HttpStatus.OK);
	
	    }
	
	
	    @GetMapping(path = { "/get/{imageId}" })
	
	    public ImageModel getImage(@PathVariable("imageId") long imageId) throws IOException {
	
	        final Optional<ImageModel> retrievedImage = imageRepository.findById(imageId);
	
	        ImageModel img = new ImageModel(retrievedImage.get().getName(), retrievedImage.get().getType(),
	
	               decompressBytes(retrievedImage.get().getPicByte()));
	
	        return img;
	
	    }
	
	
	    // compress the image bytes before storing it in the database
	
	    public static byte[] compressBytes(byte[] data) {
	
	        Deflater deflater = new Deflater();
	
	        deflater.setInput(data);
	
	        deflater.finish();
	
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	
	        byte[] buffer = new byte[1024];
	
	        while (!deflater.finished()) {
	
	            int count = deflater.deflate(buffer);
	
	            outputStream.write(buffer, 0, count);
	
	        }
	
	        try {
	
	            outputStream.close();
	
	        } catch (IOException e) {
	
	        }
	
	        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	
	        return outputStream.toByteArray();
	
	    }
	
	
	    // uncompress the image bytes before returning it to the angular application
	
	    public static byte[] decompressBytes(byte[] data) {
	
	        Inflater inflater = new Inflater();
	
	        inflater.setInput(data);
	
	        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	
	        byte[] buffer = new byte[1024];
	
	        try {
	
	            while (!inflater.finished()) {
	
	                int count = inflater.inflate(buffer);
	
	                outputStream.write(buffer, 0, count);
	
	            }
	
	            outputStream.close();
	
	        } catch (IOException ioe) {
	
	        } catch (DataFormatException e) {
	
	        }
	
	        return outputStream.toByteArray();
	
	    }
	
	}



