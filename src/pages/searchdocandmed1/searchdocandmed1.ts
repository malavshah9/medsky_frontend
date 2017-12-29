import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchproProvider } from "../../providers/searchpro/searchpro";
import { doctor } from "./classdoctor";
import { medicine } from "./classmedicines";
import { Searchdocpage1Page } from "../searchdocpage1/searchdocpage1";
import { Searchmedpage1Page } from "../searchmedpage1/searchmedpage1";
/**
 * Generated class for the Searchdocandmed1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchdocandmed1',
  templateUrl: 'searchdocandmed1.html',
})
export class Searchdocandmed1Page {

  allmedicines:medicine[]=[];
  alldoctors:doctor[]=[];
  searchstring:string="";
  matchdoctors:doctor[]=[];
  matchmedicines:medicine[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public searchpro:SearchproProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Searchdocandmed1Page');
    this.searchpro.getALlDoctors().subscribe(
      (data:doctor[])=>{
        this.alldoctors=data;
      },
      function(error){
        console.log("error"+error);
      },
      function()
      {
        console.log("Success");
      }
    );
    this.searchpro.getAllMedicines().subscribe(
      (data:medicine[])=>{
        this.allmedicines=data;
      },
      function(error){
        console.log("error"+error);
      },
      function()
      {
        console.log("Success");
      }
    );
  }
  search()
  {

    if(this.searchstring!="")
    {
      this.matchdoctors=this.alldoctors.filter((x)=>x.doc_name.toUpperCase().startsWith(this.searchstring.toUpperCase()));
      this.matchmedicines=this.allmedicines.filter((x)=>x.med_name.toUpperCase().startsWith(this.searchstring.toUpperCase()));
    }
    else
    {
      this.matchdoctors=[];
      this.matchmedicines=[];
    }
  }
  onClickDoc(item:doctor)
  {
      this.navCtrl.push(Searchdocpage1Page,{
        param1:item.pk_doc_email_id
      });
  }
  onClickMed(item:medicine){
    this.navCtrl.push(Searchmedpage1Page,{
      param1:item.pk_med_id
    });
  }

}
