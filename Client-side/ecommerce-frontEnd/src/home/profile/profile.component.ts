import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

import { CustomerService } from 'src/core/services/customer/customer.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  phno:number;
  address:string;
  email:string;
  profile:string='assets/images/profilepic.jpg';




  EmailId:string=this.session.get('email');
 


  constructor(private customerService:CustomerService,private router:Router,private session: SessionStorageService) {
    this.getCustomerInformation();
    console.log(this.EmailId);
    
    
   }

  ngOnInit(): void {
  }


getCustomerInformation(){
  
  this.customerService.displayCustomerByEmail(this.EmailId)
   .subscribe((data:any)=>{
    console.log(data);
   this.name=data.customer_name;
   this.email=data.email;
   this.address=data.address;
   this.phno=data.phno;
   
   
  }); 
  
}

}


