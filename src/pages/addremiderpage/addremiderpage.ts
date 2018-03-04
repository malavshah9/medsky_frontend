import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Calendar } from '@ionic-native/calendar';

import { Validators,FormBuilder,FormGroup } from "@angular/forms";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { ReminderproviderProvider } from "../../providers/reminderprovider/reminderprovider";
import { reminder } from "../viewreminderpage/classreminder";
import { Storage } from "@ionic/storage";


/**
 * Generated class for the AddremiderpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addremiderpage',
  templateUrl: 'addremiderpage.html',
})
export class AddremiderpagePage {
  private addreminderformgroup:FormGroup;
  public remi:reminder;  
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,private calendar:Calendar,private formBuilder:FormBuilder,
    public alertCtrl:AlertController,
    public _db:ReminderproviderProvider,
    public storage:Storage
    ) {

      this.addreminderformgroup=this.formBuilder.group({
        
        medicineReminder: ['', Validators.required],
        reminderDesc: ['',Validators.required],
        startDates: ['',Validators.required],
        endDates: ['',Validators.required]
        
      });
  
  }
  endDate=Date();
  medicineName:String;
  reminderDesc:String;
  uid:String="";
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddremiderpagePage');
  }
  dismissmodal()
  {
    
    this.viewCtrl.dismiss();
  }
  addEvent()
  {
    
    let startDate=new Date();
  let endDate=new Date(this.endDate);
  let medicinename:string;
  let reminderdesc:string;
  medicinename=this.medicineName.toString();
  reminderdesc=this.reminderDesc.toString();
  this.storage.get('id').then((val)=>{
        this.uid=val;
  });
  this.remi=new reminder(null,this.uid,this.medicineName,this.reminderDesc,startDate.toDateString(),endDate.toDateString());
  
   this.calendar.createEvent(medicinename,"",reminderdesc,startDate,endDate).then(
        result=>{
       
          ///////adding to reminder table in database
          this._db.addReminder(this.remi).subscribe((data:reminder[])=>{
            
              
              
},
function(error){
console.log(error);
},
function(){

});
          
          let alert = this.alertCtrl.create({
            title: 'New Reminder',
            subTitle: 'Medicine Reminder Successfully Added!!!',
            buttons: [
              {
                text:'OK',
                handler:()=>{
                  this.viewCtrl.dismiss();

                 

                }
              }
            ]
          });
          alert.present();
                })
                .catch(
                  error=>{
                
                    let alert = this.alertCtrl.create({
                      title: 'New Reminder',
                      subTitle: 'Reminder Couldn`t Successfully Added!!! Try again.',
                      buttons: ['OK']
                    });
                    alert.present();
                  }
                );
        
             
      }
      logForm(){
        this.addEvent();
      }
 
}
