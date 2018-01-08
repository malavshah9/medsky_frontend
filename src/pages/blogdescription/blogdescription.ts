import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { BlogdbProvider } from "../../providers/blogdb/blogdb";
import { blog } from "../about/blog";
/**
 * Generated class for the BlogdescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blogdescription',
  templateUrl: 'blogdescription.html',
})
export class BlogdescriptionPage {
  blogid:Number;
  blogdata:blog[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:BlogdbProvider,public loadingcontroller:LoadingController) {
  }

  ionViewDidLoad() {
    this.blogid=this.navParams.get('param1');
    
    console.log('ionViewDidLoad BlogdescriptionPage');
    this.db.blogid=this.blogid;
    let loadingdata=this.loadingcontroller.create({
      content:"Fetching your prescriptions"
    });
    loadingdata.present();
    this.db.getBlogById().subscribe(
      (data:blog[])=>{
        this.blogdata=data;
        console.log(data);
      }
    ,
    function(error){
      console.log("error"+error)
    },
    function(){
        console.log("success");
        loadingdata.dismiss();
    }
    );
  }

}
