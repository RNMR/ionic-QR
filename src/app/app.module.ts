import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormsModule } from '@angular/forms';
import { AuthPage } from '../pages/auth/auth';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    IonicModule.forRoot(MyApp, 
      {
        scrollAssist: false, autoFocusAssist: false
      }
    ),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage
  ],
  providers: [
    StatusBar,
    AndroidPermissions,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
