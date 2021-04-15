import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {
  mySwiper: Swiper;
  slides: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];
  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        
        autoplay: {delay:3000},
        spaceBetween: 30
    });
  }

}
