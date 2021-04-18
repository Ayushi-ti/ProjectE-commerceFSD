import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Customer } from 'src/core/models/customer.model';
import { CustomerService } from 'src/core/services/customer/customer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  EmailId:string=this.session.get('email');
  updateProfileForm: FormGroup;
  customer:Customer;
  
  constructor(private session: SessionStorageService ,private customerService:CustomerService,private formBuilder: FormBuilder, private router:Router) {
    this.buildForm();
    this.getCustomerInformation();

   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.updateProfileForm = this.formBuilder.group({
      email: new FormControl({value:'',disabled:true}),
      address: new FormControl('', Validators.required),
      phno: new FormControl('', Validators.required),
      customer_name: new FormControl('',Validators.required)
    });
  }

  getCustomerInformation(){
  
    this.customerService.displayCustomerByEmail(this.EmailId)
    .subscribe((data:any)=>{
      this.customer=data;
        console.log(this.customer); 
        this.initializeForm();
    })
    
  }

  initializeForm(){
    this.updateProfileForm = this.formBuilder.group({
      email: new FormControl({value:this.customer.email,disabled:true}),
      address: new FormControl(this.customer.address, Validators.required),
      phno: new FormControl(this.customer.phno, Validators.required),
      customer_name: new FormControl(this.customer.customer_name,Validators.required)
    });
  }

  update(){
    console.log(this.updateProfileForm.value);
   
    this.customerService.updateCustomer(this.customer.email,this.updateProfileForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.showConfirmation();
      this.router.navigate(['/home/profile']);

      
    })
  }

  redirectToProfile(){
    this.router.navigate(['/home/profile']);
  }

  cancel() {
    this.router.navigate(['/home/profile']);
  }
  showConfirmation(){
    alert("Your Account is updated");
  }

  

}
