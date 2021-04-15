import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

import { CustomerService } from 'src/core/services/customer.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  phno:string;
  address:string;
  email:string;




  EmailId:string=this.session.get('email');
  constructor(private customerService:CustomerService,private router:Router,private session: SessionStorageService) {
    this.getCustomerInformation(this.EmailId);
    
   }

  ngOnInit(): void {
  }


getCustomerInformation(EmailId){
   console.log(EmailId);
  this.customerService.getCustomerByEmail(EmailId);
  //  .subscribe(data => {
  //   console.log(data);
  //  this.name=data.customer_name;
  //  this.email=data.email;
  //  this.address=data.address;
  //  this.phno=data.phno;
    
    
  // });
    
  
}

}


