import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Viewprescription1Page } from "../viewprescription1/viewprescription1";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Hello()
  {
      this.navCtrl.push(Viewprescription1Page);    
  }

}
