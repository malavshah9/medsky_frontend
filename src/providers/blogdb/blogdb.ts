import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../../pages/about/blog';
/*
  Generated class for the BlogdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogdbProvider {
  url:string = "http://localhost:3000/blog";

  constructor(public http: HttpClient) {
    console.log('Hello BlogdbProvider Provider');
  }
  getAllBlogs(){
    return this.http.get(this.url);
  }

}
