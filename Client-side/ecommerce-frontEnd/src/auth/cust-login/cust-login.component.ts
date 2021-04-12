import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { CustomerService } from 'src/core/services/customer.service';
import { Router } from '@angular/router';
//import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {
  hide=true;
  loginForm: FormGroup;
 
  constructor(private customerService:CustomerService ,private formBuilder: FormBuilder,private router: Router ) {
      this.buildForm();
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
    const value = this.loginForm.value;
    this.customerService.login(value.userName, value.password)

    .subscribe(data => {
        console.log(data);
        this.router.navigate(['/home']);
      });
    }
    
    cancel() {
      this.router.navigate(['/']);
    }

  }
  


