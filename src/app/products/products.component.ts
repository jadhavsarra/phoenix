import { Component, OnInit } from '@angular/core';
import { Product, Cam } from '../product';
import { HEROES,SecurityCamera } from './productDetail';
import { PhoenixService } from '../_service/phoneixservice';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[] = HEROES;
  cams: Cam[] = SecurityCamera;
  productData: any;
  camData: any;

  constructor(private _service: PhoenixService) {

    this._service.demoOne.subscribe(value => {
      if(value === 'SecurityCamera'){
        this.showSecurityCam();
      }else if(value === 'Harddrive'){
        this.showHarddrive();
      }else if(value === 'DVR'){
        this.showDVR();
      }else if(value === 'AttendenceSystem'){
        this.showAttendenceSystem();
      }else if(value === 'Routerandswitches'){
        this.showRouterandswitches();
      }
    });

  }

  ngOnInit() {
  //  console.log(this.products[0]);
    this.showSecurityCam();
  }

  showSecurityCam(){
    console.log('showSecurityCam called...!', this.cams[0]);
    this.productData = this.cams[0];
    //this.productData = this.cams[1];
    //this.camData = this.cams[0];
  }

  showHarddrive(){
    console.log('Harddrive called...!', this.products[1]);
    this.productData = this.products[1];
  }

  showDVR(){
    console.log('DVR called');
  }

  showAttendenceSystem(){
    console.log('AttendenceSystem called');
  }
  showRouterandswitches(){
    console.log('Routerandswitches called');
  }

  proDetil(value){
    console.log('fetching detail of => ',value);
    for (let cam of this.cams) {
      //console.log(cam); // "Cat", "Dog", "Hamster"
      if(cam.desc === value){
        this.productData = cam;
      }
    }
  }
}
