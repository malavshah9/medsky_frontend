//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/rx';
import { User_Class } from "./user_class";


/*
  Generated class for the UserlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserlogProvider {

  constructor(public http: Http) {
    console.log('Hello UserlogProvider Provider');
  }
  public url_login:string="http://localhost:3000/login/";
  public url_signup:string="http://localhost:3000/signup/";
  public url_Byid:string="http://localhost:3000/alldata/";
  public url_email:string="http://localhost:3000/forget/";
  public url_chngpass:string="http://localhost:3000/change/";

  
  id:string='';
  usr:User_Class[]=[];
  Login(user:User_Class) {
  
    let body = JSON.stringify(user);
    //console.log(body);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
    
   return this.http.post(this.url_login,body,ro)
   .map((res:Response) => res.json());
  }
  addUser(user){
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_signup, body, ro).map((res) => res.json());
  }
  updateUser(user){
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.put(this.url_Byid+user.pk_usr_email_id, body, ro).map((res) => res.json());
  }
  getUserid(user)
  {
    return this.http.get(this.url_Byid+user).map((res) => res.json());
  }
  
  getUser(user)
  {
    return this.http.get(this.url_Byid).map((res) => res.json());
  }
  sendemail(user)
  {
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_email, body, ro).map((res) => res.json());
  
  }
  changepass(user)
  {
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
    return this.http.put(this.url_chngpass+user.pk_usr_email_id, body, ro).map((res) => res.json());
  }

}
