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
      duration:2000,
      position:"top"
    });
    this.data.addUser(new User_Class(0,this.email_id,'',this.mno,this.password,'','',0,'',''))
   .subscribe(

     (data:User_Class[])=>{
       if(this.email_id=='')

       {
         /* let t2=this.toast.create({
          message:"Please Enter Valid Data",
          duration:2000,
          position:"top"
         });*/
        alert("Enter Valid Data");
        this.navCtrl.push(SignuppagePage);
       }
       if(this.password=='')
       {
         alert("enter password");
       }
       if(this.mno=='')
       {
        alert("enter Mobile No");
       }
       else{
        let l1=this.load.create({
          content:"Loading...",
          duration:3000

        });
       // l1.present();
       
        t1.present();
        //l1.dismissAll();
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
