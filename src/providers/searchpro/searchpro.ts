//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import "rxjs/rx";

/*
  Generated class for the SearchproProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchproProvider {

  constructor(public _http: Http) {
    console.log('Hello SearchproProvider Provider');
  }
  private url1="http://localhost:3000/doctor/";
  private url2="http://localhost:3000/medicines/";
  getALlDoctors()
  {
    return this._http.get(this.url1).map((response:Response)=>response.json());
  }
  getAllMedicines()
  {
    return this._http.get(this.url2).map((response:Response)=>response.json());
  }

}
