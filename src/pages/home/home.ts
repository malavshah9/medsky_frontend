import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Viewprescription1Page } from "../viewprescription1/viewprescription1";
import { Searchdocandmed1Page } from '../searchdocandmed1/searchdocandmed1';
import { Storage } from "@ionic/storage";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController,public storage:Storage) {
 
  this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewDidLoad()
  {
    
    
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    },5000);
    
    
    
    this.storage.get('id').then((val)=>{
      alert(val);
    });       
   
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
