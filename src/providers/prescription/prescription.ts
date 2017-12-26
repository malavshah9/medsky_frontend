//`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { prescription  } from "../../pages/home/classprescription";
import { Http,Response} from "@angular/http";
//import { Observable } from "rxjs/Observable";
//below code is new for passing two params in querystring
import { RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/rx";
/*
  Generated class for the PrescriptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrescriptionProvider {

  constructor(public _http:Http) {
    console.log('Hello PrescriptionProvider Provider');
  }
 // private presc:prescription[]=[];
  private url="http://localhost:3000/prescription/";
  private url2="http://localhost:3000/prescription2/"
  uid:String="";
  did:String="";
  querystring:String="";

  getPrescription()
  {
    this.uid="malav@gmail.com";
  //  console.log(this.url+this.uid);
    return this._http.get(this.url+this.uid).map((response:Response)=>response.json());
  }
  getPrescriptionDate(uid,did)
  {

 /*
    //new code for passing two params in querystring
    let params: URLSearchParams = new URLSearchParams();
    params.set('var1', uid);
    params.set('var2', did);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    // new code ends
    */

   
    return this._http.get(this.url2+(uid+"/"+did)).map((response:Response)=>response.json());

  }
}
