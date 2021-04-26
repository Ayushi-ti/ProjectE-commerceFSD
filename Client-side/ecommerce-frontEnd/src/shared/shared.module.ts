import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {SharedRoutingModule} from './share.routing';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  
    ReactiveFormsModule,
    RouterModule,
    SharedRoutingModule

    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
