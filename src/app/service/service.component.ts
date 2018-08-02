import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  Turnkeyproject:boolean = true;
  Annual:boolean = false;
  Maintainance:boolean=false;
  Consulting:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  showTurnkeyproject(){
    if(this.Turnkeyproject == false){
      this.Annual= false;
      this.Maintainance=false;
      this.Consulting=false;
      this.Turnkeyproject=true;
    }
  }
  showAnnual(){
      if(this.Annual == false){
        this.Annual= true;
        this.Maintainance=false;
        this.Consulting=false;
        this.Turnkeyproject=false;
      }
    }

showMaintainance(){
    if(this.Maintainance == false){
      this.Annual= false;
      this.Maintainance=true;
      this.Consulting=false;
      this.Turnkeyproject=false;
    }
  }

  showConsulting(){
    if(this.Consulting == false){
      this.Annual= false;
      this.Maintainance=false;
      this.Consulting=true;
      this.Turnkeyproject=false;
    }
  }

}
