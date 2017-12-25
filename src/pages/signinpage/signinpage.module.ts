import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninpagePage } from './signinpage';

@NgModule({
  declarations: [
    SigninpagePage,
  ],
  imports: [
    IonicPageModule.forChild(SigninpagePage),
  ],
})
export class SigninpagePageModule {}
