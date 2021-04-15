import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/core/services/customer/customer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide=true;
  
  constructor(private customerService:CustomerService,private formBuilder: FormBuilder, private router:Router) {
    this.buildForm();
   }

  ngOnInit(): void {
    
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(1),Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      address: new FormControl('', Validators.required),
      phno: new FormControl('', Validators.required),
      customer_name: new FormControl('',Validators.required)
    });
  }

  register(){
    console.log(this.registerForm.value);
    this.customerService.saveCustomer(this.registerForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.showConfirmation();
      this.router.navigate(['/auth/login']);

      
    })
  }

  redirectToLogin(){
    this.router.navigate(['/auth/login']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }
  showConfirmation(){
    alert("Your Account is registered");
  }



  }

 

