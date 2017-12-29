import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,ToastController} from 'ionic-angular';
import { UserlogProvider } from "../../providers/userlog/userlog";
import { User_Class } from "../../providers/userlog/user_class";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the SignuppagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signuppage',
  templateUrl: 'signuppage.html',
})
export class SignuppagePage {

  email_id:string='';
  password:string='';
  mno:string='';
  userObject:User_Class;
  
  constructor(public load:LoadingController,public toast:ToastController,public navCtrl: NavController, public data:UserlogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignuppagePage');
  }
  onSignupClick()
  {
   let t1=this.toast.create({
      message:"Signup Successfully",
      duration:3000,
      position:"bottom"
    });
    let t2=this.toast.create({
      message:"Enter Email Id",
      duration:3000,
      position:"bottom"
    });
    let t3=this.toast.create({
      message:"Enter Password",
      duration:3000,
      position:"bottom"
    });
    let t4=this.toast.create({
      message:"Enter Mobile No",
      duration:3000,
      position:"bottom"
    });
  
    this.data.addUser(new User_Class(0,this.email_id,'',this.mno,this.password,'','',0,'',''))
   .subscribe(

     (data:User_Class[])=>{
       if(this.email_id=='')
       {
        t2.present();
        this.navCtrl.push(SignuppagePage);
       }
       if(this.password=='')
       {
        t3.present();
       }
       if(this.mno=='')
       {
        t4.present();
       }
       else{
        t1.present();
        this.navCtrl.push(TabsPage);
       }
     },
     function(error){
      console.log(error);
    },
    function(){
     
    }
   );
  }


}
