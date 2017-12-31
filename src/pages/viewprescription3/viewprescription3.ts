import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { PrescriptionProvider } from "../../providers/prescription/prescription";
import { prescription3 } from "./classprescription3";
import { medicinesnames } from "./classmedicinenames";
import { presc } from './classprescc';

/**
 * Generated class for the Viewprescription3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewprescription3',
  templateUrl: 'viewprescription3.html',
})
export class Viewprescription3Page {
 
  pk_pres_id:Number;
  datas:presc[];
  
//  prescriptions:prescription3[]=[];
 //prescription details
// i:Number=0;

 doc_name:String;
 pres_date:String;
  medicines:String;
 
  mornings:String;
          mor_array:String[]=[];
 noons:String;
          non_array:String[]=[];
 nights:String;
          nig_array:String[]=[];
 instr:String;
          ins_array:String[]=[];
 days:String;
          day_array:String[]=[];
    
          
           
             
 
 medicine_name:String[]=[];
 medicine_type:String[]=[];
medicinenames:String[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingcontroller:LoadingController,public _dbprescription:PrescriptionProvider) {

  }

  ionViewDidLoad() {
   
    this.pk_pres_id=this.navParams.get('param1');
   
    console.log('ionViewDidLoad Viewprescription3Page');
   
 let loadingdata=this.loadingcontroller.create({
      content:"Fetching Prescription"
    });
    loadingdata.present();
   this._dbprescription.pid=this.pk_pres_id;
this._dbprescription.getWholePrescription().subscribe(
  (data:prescription3[])=>{
  //  this.prescriptions=data;
    console.log(data);
//--------------------------
for(let item of data)
{
  this.days=item.pres_day;
  this.medicines=item.col_medids;
  this.instr=item.pres_instr;
  this.mornings=item.pres_morning;
  this.noons=item.pres_noon;
  this.nights=item.pres_night;
  this.pres_date=item.pres_date;
  this.doc_name=item.doc_name;
}


this.medicinenames=this.medicines.split(',');
this.day_array=this.days.split(',');
this.ins_array=this.instr.split(',');
this.mor_array=this.mornings.split(',');
this.non_array=this.noons.split(',');
this.nig_array=this.nights.split(',');


this.initData(this.medicine_name);
/*for(let item of this.medicine_name)
{
  this.datas.push({med_name:item});
}*/
/*
for(let data of this.displayData,let itm of this.medicine_name)
{
 * data.medicinename="";
}*/

/*for(let it of this.day_array)
{
  alert(" viewprescription3.ts ma "+it);
  
}
alert("viewprrescription ma length aa 6" +this.day_array.length);
var i=0;
for(i=0;i<this.day_array.length;i++)
{

}*/




},
  function(error){
    console.log("error"+error)
  },
  function()
  {
    console.log("Success");
    loadingdata.dismiss()

   
  }
);
/*this.medicines=this.prescriptions.col_medids;
this.mornings=this.prescriptions.pres_mornings;
this.noons=this.prescriptions.pres_noon;
this.nights=this.prescriptions.pres_night;
this.instr=this.prescriptions.pres_instr;
this.days=this.prescriptions.pres_date;
  */  
  }
  initData(items:any[])
  {
    for(let item of this.medicinenames)
    {
      
      this._dbprescription.mid=item;
      this._dbprescription. getmedicinename()
      .subscribe(
        (data:any[])=>{
          console.log(data);
          for(let item of data)
          {
            this.medicine_name.push(item.med_name);
            
            this.medicine_type.push(item.med_type);
           }
        
       }, 
     function(error){
        console.log("error"+error)
      },
      function()
      {
        console.log("Success");
       // this.initData1();
      
       
      }
    );
    }
    
    
   
   }
   
  
}

  
