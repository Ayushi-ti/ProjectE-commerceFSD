import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/material/material.module';
import{ SwiperConfigInterface, SwiperModule, SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import { ProductsModule } from 'src/products/products.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface={
  direction: 'horizontal',
  slidesPerView:'auto'
}

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SwiperModule,
    ProductsModule
  
  ],
  providers:[{
    provide: SWIPER_CONFIG,
    useValue:DEFAULT_SWIPER_CONFIG
  }]
})
export class HomeModule { }
