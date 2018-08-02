import { Component } from '@angular/core';
import { PhoenixService } from './_service/phoneixservice';
//import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  togleMenu= true;

constructor(private _service: PhoenixService){
  //this._service.demo();
  }

  toggleMenu(){
    this.togleMenu = !this.togleMenu;
  }

  showProductDetail(value){
    console.log(value);
    this._service.demo(value);
  }

}
