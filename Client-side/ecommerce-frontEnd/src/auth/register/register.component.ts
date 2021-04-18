import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/core/models/customer.model';
import { CustomerService } from 'src/core/services/customer/customer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide=true;
  customer:Customer= new Customer();

  
  constructor(private customerService:CustomerService,private formBuilder: FormBuilder, private router:Router) {
    this.buildForm();
   }

  ngOnInit(): void {
    
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.min(1),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      address: new FormControl('', Validators.required),
      phno: new FormControl('', Validators.required),
      customer_name: new FormControl('',Validators.required)
    });
  }

  register(){
    console.log(this.registerForm.value);
    this.customerService.saveCustomer(this.registerForm.value)
    .subscribe((res:Customer)=>{
      console.log(res);
      this.customer=res;
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

 

