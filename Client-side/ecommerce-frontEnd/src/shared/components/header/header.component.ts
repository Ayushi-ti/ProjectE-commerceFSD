import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag:boolean=false;
  EmailId;
  
  
  constructor(private router: Router,private session: SessionStorageService) { 
    this.EmailId=this.session.get('email');
  
  if(this.EmailId!=null)
  this.flag=true;
  }

  ngOnInit(): void {
  }

logout(){
  this.session.remove('email');
}




}
