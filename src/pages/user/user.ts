import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { UserlogProvider } from "../../providers/userlog/userlog";
import { User_Class } from "../../providers/userlog/user_class";
import { AboutPage } from '../about/about';
import { ChangepassPage } from "../changepass/changepass";
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user:string='';
  usr:User_Class[]=[];
  pass:string='';
  name:string='';
  mno:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public udata:UserlogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.storage.get('id').then((val)=>{
    this.user=val;
    this.udata.getUser(this.user).subscribe(
      (data:User_Class[])=>{
        this.usr=data;
        this.pass=this.usr[0].usr_pass;
        this.name=this.usr[0].usr_name;
        this.mno=this.usr[0].usr_mno;
        

      },
      function(err){},
      function(){}
    );
    });       
   

  }
  onChangePassClick()
  {
    this.navCtrl.push(ChangepassPage);
  }

}
