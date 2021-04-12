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

      name: new FormControl("name", [
        Validators.required
      ]),
      Email: new FormControl("xyz@gmail.com", Validators.required),
      password: new FormControl("", [Validators.required, Validators.min(1)]),
      confirmPassword: new FormControl("", Validators.required),
      Caddress: new FormControl("address", Validators.required),
      MobileNo: new FormControl("9872987733", Validators.required)

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


