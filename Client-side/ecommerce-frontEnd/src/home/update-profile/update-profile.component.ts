import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { CustomerService } from 'src/core/services/customer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  EmailId:string=this.session.get('email');
  updateProfileForm: FormGroup;
  email:string ;
  name:string;
  phno:string;
  address:string;
  
  constructor(private session: SessionStorageService ,private customerService:CustomerService,private formBuilder: FormBuilder, private router:Router) {
    this.buildForm();
    this.getCustomerInformation();

   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.updateProfileForm = this.formBuilder.group({
      //email: new FormControl("xyz@gmail.com", [Validators.required,Validators.email]),
      //password: new FormControl("samplePas", [Validators.required, Validators.min(1),Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      address: new FormControl(this.address, Validators.required),
      phno: new FormControl(this.phno, Validators.required),
      customer_name: new FormControl(this.name,Validators.required)
    });
  }

  update(){
    console.log(this.updateProfileForm.value);

    this.customerService.updateCustomer(this.EmailId,this.updateProfileForm.value)
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

  getCustomerInformation(){
  
    this.customerService.displayCustomerByEmail(this.EmailId);
    //  .subscribe((data:any)=>{
    //   console.log(data);
    //  this.name=data.customer_name;
    //  this.email=data.email;
    //  this.address=data.address;
    //  this.phno=data.phno;
     
     
    // }); 
    
  }


}
