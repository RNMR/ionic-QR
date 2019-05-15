import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AuthPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private androidPerms: AndroidPermissions) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(platform.is('cordova')){
      this.androidPerms.checkPermission(this.androidPerms.PERMISSION.CAMERA).then(
        result => console.log('Tiene permisos?', result.hasPermission),
        err => this.androidPerms.requestPermission(this.androidPerms.PERMISSION.CAMERA)
      )
      this.androidPerms.requestPermissions([this.androidPerms.PERMISSION.CAMERA, this.androidPerms.PERMISSION.GET_ACCOUNTS])}
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

