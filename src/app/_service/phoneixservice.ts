import { Injectable, Component } from "@angular/core";
import { Subject } from 'rxjs';


@Injectable()
export class PhoenixService{

  demoOne: Subject<any> = new Subject();

  demo(value){
    console.log("demo function called", value);
    this.demoOne.next(value);
  }

}
