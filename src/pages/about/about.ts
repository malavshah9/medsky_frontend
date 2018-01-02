import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogdbProvider } from "../../providers/blogdb/blogdb";
import { blog } from "./blog";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
bg:blog[];
like:number=0;
comment:number=0;
  constructor(public navCtrl: NavController,public bgdata:BlogdbProvider) {

  }
  ionViewDidLoad(){
    this.bgdata.getAllBlogs().subscribe(
      (data:blog[])=>{
        this.bg=data;
      }
    );
  }
  tapev(e)
  {
    this.like++;
  }
  tapv(k)
  {
    this.comment++;
  }

}
