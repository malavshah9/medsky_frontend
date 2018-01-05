import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { PrescriptionProvider } from "../../providers/prescription/prescription";
import { prescription3 } from "./classprescription3";



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
indexing:String[]=[];
pk_pres_id:Number;
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
sortedmedname:String[]=[];
temp:String;
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
  }
  initData(items:any[])
  {
    var i:Number;
   for(let item of this.medicinenames)
   {
    this._dbprescription.mid=item;
    i=this.medicinenames.indexOf(this._dbprescription.mid);
    alert(i);
    this.indexing.push(i.toString());
    
    
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
       
      }
    );
  }
 //this.sortData();
}
      sortData()
      {
        var i=0;
        var j=0;
        var t,s;
        
        i=this.indexing.length;
        alert("indexing  ->length " + i);
        for(j=0;j<i;j++)
        {
          if(this.indexing[j] != this.medicinenames[j])
          {
                t=this.medicinenames[j];
                s=this.indexing[j];
                this.temp=this.medicine_name[t];
                this.medicine_name[t]=this.medicine_name[s];
                this.medicine_name[s]=this.temp;
                
          }
        }
        for(j=0;j<i;j++)
        {
            this.medicine_name.shift();
         
        }
      }

 
}

  
