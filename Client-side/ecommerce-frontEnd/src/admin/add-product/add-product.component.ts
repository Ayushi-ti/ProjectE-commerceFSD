import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/core/models/product.model';
import { ProductService } from 'src/core/services/product/product.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
productId:number=3;


  
  
  
  productForm:FormGroup;
  categories:Category[]=[{value:'Electronics',viewValue:'Electronics'},
  {value:'Clothing',viewValue:'Clothing'},{value:'Books',viewValue:'Books'},
  {value:'Accesories',viewValue:'Accesories'},{value:'Bags and Luggage',viewValue:'Bags and Luggage'},
  {value:'Footwear',viewValue:'Footwear'},{value:'Make-up',viewValue:'Make-up'}];
  

  constructor(private productService:ProductService,private router: Router) { 
    this.productForm = new FormGroup({

      product_name: new FormControl('', Validators.required),
      
      description: new FormControl('', Validators.required),

      product_price: new FormControl('', Validators.required),
      total_quantity:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required)

  
  });
  }

  ngOnInit(): void {
  }

  saveProduct(){
  console.log(this.productForm.value);
    const product=this.productForm.value;
      
     this.productService.saveProduct(this.productForm.value)
     .subscribe((res:Product)=>{
      console.log(res);
      this.productId=res.product_id;
    })
  
    alert("Product added successfully");
    this.router.navigate(['/../admin/home']);
  }


 //Gets called when the user selects an image
  public onFileChanged(event) {
   //Select File
   this.selectedFile = event.target.files[0];
 }

 //Gets called when the user clicks on submit to upload the image

onUpload() {
   console.log(this.selectedFile);
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.productService.saveProductImage(this.productId,uploadImageData) 
  .subscribe((response) => {
    console.log(response);
     
    });
}


//Gets called when the user clicks on retieve image button to get the image from back end
   getImage() {
 //Make a call to Sprinf Boot to get the Image Bytes.
        //this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
        this.productService.getProductsImage(this.productId)
         .subscribe((res:any)  => {
         this.retrieveResonse = res;
         this.base64Data = this.retrieveResonse.picByte;
         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        });
       }








  




}
