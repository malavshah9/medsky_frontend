import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Viewprescription1Page } from "../viewprescription1/viewprescription1";
import { Searchdocandmed1Page } from '../searchdocandmed1/searchdocandmed1';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onViewPrescription()
  {
      this.navCtrl.push(Viewprescription1Page);    
  }
  onSearch()
  {
    this.navCtrl.push(Searchdocandmed1Page);
  }

}
