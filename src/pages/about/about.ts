import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { BlogdbProvider } from "../../providers/blogdb/blogdb";
import { blog } from "./blog";
import { BlogdescriptionPage} from "../blogdescription/blogdescription";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
bg:blog[];
like:number=0;
comment:number=0;
  constructor(public navCtrl: NavController,public bgdata:BlogdbProvider,public toast:ToastController) {

  }
  doRefresh(refresher){
    
     
    
      this.bgdata.getAllBlogs().subscribe(
        (data:blog[])=>{
          this.bg=data;
        }
      );
    
     refresher.complete();
 
   }
  ionViewDidLoad(){
    let t1=this.toast.create({
      message:"Pull Down to Refresh Content",
      duration:5000,
      position:"bottom"
    });
    this.bgdata.getAllBlogs().subscribe(
      (data:blog[])=>{
        this.bg=data;
      }
    );
    t1.present();
  }
  tapev(e)
  {
    this.like++;
  }
  tapv(k)
  {
    this.comment++;
  }
  onRead(i:any)
  {
    
    this.navCtrl.push(BlogdescriptionPage,{
      param1:i
    });
  }

}
