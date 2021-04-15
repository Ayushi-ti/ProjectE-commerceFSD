import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
//import { CustomerService } from 'src/core/services/customer.service';
import { Router } from '@angular/router';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { CustomerService } from 'src/core/services/customer.service';
//import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {
  Email:string;
  hide=true;
  loginForm: FormGroup;
  customersList:any=[];

  
  //@SessionStorage() sessionValue: string = `Email`;
 
  constructor(private customerService:CustomerService ,private formBuilder: FormBuilder,private router: Router ,private session: SessionStorageService) {
      this.buildForm();
      this.customersList=customerService.getCustomers();
    }

    






  ngOnInit(): void {
    

  }
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login(){
    console.log(this.loginForm.value);
    //this.customerService.login(this.loginForm.value.email ,this.loginForm.value.password  )
    const user = this.loginForm.value;
    this.Email=user.email;
    this.customerService.login(user.email, user.password)

    .subscribe(data => {
        console.log(data);
        this.session.set("email",this.Email);
        this.session.get("email");
        console.log(this.router.navigate(['/home']));

        // if (this.session.get("customersList") != null) {
        //   this.customersList = this.session.get("customersList");
        // }
        // if(data==true){
        // this.customersList.push({
          
        //   email :user.email
        // })
        // }
        // this.session.set("customersList", this.customersList);
      });





     


      
    
  

    
    }
    
    cancel() {
      this.router.navigate(['/home']);
    }
    redirectToRegister(){
      this.router.navigate(['/auth/register']);
    }
    redirectToHome(){
      this.router.navigate(['/home']);
    }


   
    

  }
  


