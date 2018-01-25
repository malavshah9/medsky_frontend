import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { UserPage } from "../user/user";
import { UserlogProvider } from "../../providers/userlog/userlog";
import { User_Class } from "../../providers/userlog/user_class";
import { TabsPage } from "../../pages/tabs/tabs";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
})
export class ChangepassPage {
  user:User_Class[]=[];
  pass:string='';
  email_id:string='';
  npass:string='';
  cpass:string='';
  x:User_Class[]=[];
  opass:string='';
  u:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public _db:UserlogProvider,public toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepassPage');
  }
  
  onChangePassClick()
  {
    let t3=this.toast.create({
      message:"Password Successfully Changed",
      duration:3000,
      position:"bottom"
  
    });
    alert("ehh");
    this.storage.get('pass').then((val)=>{
      this.pass=val;  
     // alert(this.pass);
    this._db.changepass(new User_Class(0,this.u,'','',this.pass,'','',0,'','')).subscribe(
      (data:User_Class[])=>{
        this.user=data;

      //this.pass=this.user[0].usr_pass;
       // this.opass=this.user[0].usr_pass;
        //alert(this.pass);
        if(this.pass==this.opass)
        {
          if(this.npass==this.cpass)
          {
            t3.present();
          }
        
        }
          
       },
       function(error){
         console.log(error);
       },
       function(){
         //l1.dismissAll();
       }
     );
    }); 

  }

}
