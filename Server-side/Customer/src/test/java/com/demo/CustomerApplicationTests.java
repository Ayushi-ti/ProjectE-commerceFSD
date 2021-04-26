package com.demo;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.demo.entity.Customer;
import com.demo.repository.CustomerRepository;
import com.demo.service.CustomerService;


@RunWith(SpringRunner.class)
@SpringBootTest
class CustomerApplicationTests {

//	@Test
//	void contextLoads() {
//	}
//	
 @MockBean
 private CustomerRepository customerRepository;
 @Autowired
 CustomerService customerService;
 
 @Test
 public void saveCustomerTest()
 {
	 Customer customer=new Customer(1, "demo","demo@gmail.com","Shravya@23",7777,"dandeli","pune");
	 System.out.println(customer.toString());
	 Mockito.when(customerRepository.save(customer)).thenReturn(customer);
	 boolean cust = customerService.savecustomer(customer);
	 //boolean cust=true;
	Assert.assertTrue(cust);
	 
 }

 @Test
 public void getCustomerByEmailTest()
 {
	 String emailid="demo@gmail.com";
	 Customer customer=new Customer(5,"ram","demo@gmail.com","Ram@4",6666,"pune","pune");
	 Mockito.when(customerRepository.findByemail(emailid)).thenReturn(customer);
	 assertEquals(customer,customerService.getCustomerEmail(emailid));
 }

 @Test
 public void verifyCustomerNotFoundTest()
 {
	 String emailid="demo4@gmail.com";
	 Customer customer=new Customer(5,"ram","demo@gmail.com","Ram@4",6666,"pune","pune"); 
	 Mockito.when(customerRepository.findByemail(emailid)).thenReturn(customer);
	 Assert.assertFalse(customerService.verifycustomer(customer));
 }
 
 @Test
 public void getAllCustomerTest()
 {
	 Mockito.when(customerRepository.findAll()).thenReturn(Stream
			 .of(new Customer(1,"ria","ria@gmail.com","Ria@2",9999,"bangalore","mumbai"),
					 new Customer(2,"priya","priya@gmail.com","Priya@4",6666,"pune","mumbai")).collect(Collectors.toList()));
	 assertEquals(2,customerService.displaycustomer().size());
 
 }
 

 
}
