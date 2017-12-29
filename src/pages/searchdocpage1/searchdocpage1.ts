import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { doctor } from "../searchdocandmed1/classdoctor";
import { SearchproProvider } from "../../providers/searchpro/searchpro";
import { doctordetails } from "./classdoctor";

/**
 * Generated class for the Searchdocpage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchdocpage1',
  templateUrl: 'searchdocpage1.html',
})
export class Searchdocpage1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public _db:SearchproProvider,public loadingcontroller:LoadingController) {
  }
  doc:String;
  doctors:doctordetails;
  doct:String="Professional";
  ionViewDidLoad() {
    this.doc=this.navParams.get('param1');
    console.log('ionViewDidLoad Searchdocpage1Page');
    let loadingdata=this.loadingcontroller.create({
      content:"Fetching Doctor Details"
    });
    loadingdata.present();
    this._db.id=this.doc;
    this._db.searchDoc().subscribe(
      (data:doctordetails[])=>{
        console.log(data);
      for(let item of data){
        this.doctors=item;
      }
      
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
