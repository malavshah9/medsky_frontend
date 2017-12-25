import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Viewprescription1Page } from '../pages/viewprescription1/viewprescription1';
import { Searchdocandmed1Page } from "../pages/searchdocandmed1/searchdocandmed1";
import { Tutorialpage1Page } from "../pages/tutorialpage1/tutorialpage1";
//import { AuthenticationpagePage } from "../pages/authenticationpage/authenticationpage";
import { SigninpagePage } from "../pages/signinpage/signinpage";
import { SignuppagePage } from "../pages/signuppage/signuppage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrescriptionProvider } from '../providers/prescription/prescription';
import { SearchproProvider } from '../providers/searchpro/searchpro';
//import { Tutorialpage1Page } from '../pages/tutorialpage1/tutorialpage1';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Viewprescription1Page,
    Searchdocandmed1Page,
    Tutorialpage1Page,
    SignuppagePage,
    SigninpagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Viewprescription1Page,
    Searchdocandmed1Page,

    Tutorialpage1Page,
    SigninpagePage,
    SignuppagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrescriptionProvider,
    SearchproProvider
  ]
})
export class AppModule {}
