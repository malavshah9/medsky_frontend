import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { PrescriptionProvider } from "../../providers/prescription/prescription";
import { prescription } from "../home/classprescription";

/**
 * Generated class for the Viewprescription1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewprescription1',
  templateUrl: 'viewprescription1.html',
})
export class Viewprescription1Page {

  allpresc:prescription[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingcontroller:LoadingController,public toast:ToastController,public _dbprescription:PrescriptionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Viewprescription1Page');
    console.log("Hello Welcome to View Prescription page 1");
    let loadingdata=this.loadingcontroller.create({
      content:"Fetching your prescriptions"
    });
    loadingdata.present();
    
    this._dbprescription.getPrescription().subscribe(
      (data:prescription[])=>{
        this.allpresc=data;
        console.log(data);
      },
      function(error){
        console.log("error"+error)
      },
      function()
      {
        console.log("Success");
        loadingdata.dismiss()
      }
    );
  }

}
