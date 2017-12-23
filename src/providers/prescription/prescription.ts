import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { prescription  } from "../../pages/home/classprescription";
import { Http,Response} from "@angular/http";
//import { Observable } from "rxjs/Observable";
import "rxjs/rx";
/*
  Generated class for the PrescriptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrescriptionProvider {

  constructor(public _http:Http,public http: HttpClient) {
    console.log('Hello PrescriptionProvider Provider');
  }
 // private presc:prescription[]=[];
  private url="http://localhost:3000/prescription/";
  uid:String="";

  getPrescription()
  {
    this.uid="malav@gmail.com";
    console.log(this.url+this.uid);
    return this._http.get(this.url+this.uid).map((response:Response)=>response.json());
  }
}
