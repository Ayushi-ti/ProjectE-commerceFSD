import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/core/services/customer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      
      email: new FormControl("xyz@gmail.com", Validators.required),
      password: new FormControl("", [Validators.required, Validators.min(1)]),
      address: new FormControl("address", Validators.required),
      phno: new FormControl("9872987733", Validators.required),
      customer_name: new FormControl("",Validators.required)

    });
  }

  create(){
    console.log(this.registerForm.value);
    this.customerService.saveCustomer(this.registerForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      

      
    })
  }
  }


