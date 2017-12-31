import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { UserlogProvider } from "../../providers/userlog/userlog";
import { User_Class } from "../../providers/userlog/user_class";
import { SignuppagePage } from "../signuppage/signuppage";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the SigninpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signinpage',
  templateUrl: 'signinpage.html',
})
export class SigninpagePage {
  email_id:string='';
  password:string='';
  userObject:User_Class;
  constructor(public storage:Storage,public load:LoadingController,public toast:ToastController,public navCtrl: NavController,public _db:UserlogProvider){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninpagePage');
  }
  // aa code thi home par redirect thavase 
  onSignInNext(){
      /*  let l1=this.load.create({
      content:"Loading...",
      duration:2000
    });
    l1.present();*/
    let t1=this.toast.create({
      message:"Login Successfully",
      duration:3000,
      position:"bottom"
    });
  let t2=this.toast.create({
    message:"Enter Valid Data",
    duration:3000,
    position:"bottom"

  });
  let t3=this.toast.create({
    message:"Enter proper mail id and Password",
    duration:3000,
    position:"bottom"

  });
  
    

    this._db.Login(new User_Class(0,this.email_id,'','',this.password,'','',0,'',''))
    .subscribe(
      (x:User_Class[])=>{
       if(this.email_id=='' || this.password=='')
        {
          t2.present();
        }
        else{
        if(x.length==1){
         /* alert('login successfully');
          let l1=this.load.create({
            content:"Loading...",
            duration:3000
  
          });
          l1.present();*/
 
          t1.present();
          //l1.dismissAll();
 
          this.storage.set('id',this.email_id);
         
          this.navCtrl.push(TabsPage);
        }
        else{
         t3.present();
          this.navCtrl.push(SigninpagePage);
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
}

onClick()
{
  this.navCtrl.push(SignuppagePage);
}

}
