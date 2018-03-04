
import { Injectable } from '@angular/core';

import { Http,Response,Headers} from "@angular/http";
import { RequestOptions, URLSearchParams } from '@angular/http';
import { reminder } from "../../pages/viewreminderpage/classreminder";
import { Storage } from "@ionic/storage";
import "rxjs/rx";


/*
  Generated class for the ReminderproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReminderproviderProvider {
  private url="http://localhost:3000/rem/";
  uid:String="";
  
  constructor(public _http:Http,
              public storage:Storage
  ) {
    console.log('Hello ReminderproviderProvider Provider');
    this.storage.get('id').then((val)=>{
      this.uid=val;
    });
    
  }

  getReminders()
  {
    return this._http.get(this.url+this.uid).map((response:Response)=>response.json());
  }
  addReminder(rem:reminder)
  { 
    
    let body = JSON.stringify(rem);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
    return this._http.post(this.url,body,ro).map((res:Response)=>res.json());
   
  }

}
