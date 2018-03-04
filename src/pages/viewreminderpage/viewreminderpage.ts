import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from "@ionic-native/calendar";
import { Platform } from 'ionic-angular/platform/platform';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import { AddremiderpagePage } from "../addremiderpage/addremiderpage";
import { ReminderproviderProvider } from "../../providers/reminderprovider/reminderprovider";
import { reminder } from "./classreminder";

/**
 * Generated class for the ViewreminderpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewreminderpage',
  templateUrl: 'viewreminderpage.html',
})
export class ViewreminderpagePage {
  reminderarray:reminder[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private calendar:Calendar,
    private plt:Platform,
    public modalCtrl:ModalController,
    public _db:ReminderproviderProvider) {
  }

  endDate=Date();
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewreminderpagePage');
    this._db.getReminders().subscribe((data:reminder[])=>{
      this.reminderarray=data;
      console.log(data);
   },
   function(error){
     console.log(error);
   },
   function(){
     console.log("success");
   }
    );
  
  }
  addEvent()
  {
    let modal=this.modalCtrl.create(AddremiderpagePage);
    modal.present();
    modal.onDidDismiss(()=>{
        this.ionViewDidLoad();
    });
  //  let date=new Date();
    
    
/*    this.calendar.createEventInteractivelyWithOptions('My New Event','Munster','Some Special Notes',date,date).then(()=>{
    
    });
*/
/*let startDate=new Date();
let endDate=new Date(this.endDate);
*/

  /*  this.calendar.createEvent("Trial Event","Ahmedabad","Take Medicines from Medsky",startDate,endDate).then(()=>{
      
            });*/
  }
}
