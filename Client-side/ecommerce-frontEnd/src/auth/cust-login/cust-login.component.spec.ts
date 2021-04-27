import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, InjectionToken } from '@angular/core';
import {  async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustLoginComponent } from './cust-login.component';
import { By } from '@angular/platform-browser';

describe('CustLoginComponent', () => {
  let component: CustLoginComponent;
  let fixture: ComponentFixture<CustLoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule,FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,BrowserAnimationsModule],
      declarations: [ CustLoginComponent ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLoginComponent);
    component = fixture.componentInstance;
  // fixture.detectChanges();
  de = fixture.debugElement.query(By.css("form"));
  el = de.nativeElement;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('[Form-Check]- should check form is valid or not if no value entered',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is valid or not when value entered',()=>{
    component.loginForm.controls['email'].setValue('mayank@gmail.com');
    component.loginForm.controls['password'].setValue('Mayank@123');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should test if submit button is disabled when the form is invalid -- Wrong format of email', waitForAsync(() => {
    component.loginForm.controls['email'].setValue('abc');
    component.loginForm.controls['password'].setValue('abc@123');
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeFalsy();
  }));
});
