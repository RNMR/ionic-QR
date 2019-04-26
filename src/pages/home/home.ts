import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  scanOptions : BarcodeScannerOptions = {
    prompt: "",
    formats:"QR_CODE",
    showFlipCameraButton:true,
  };
  constructor(
    public navCtrl: NavController, 
    private scanner: BarcodeScanner,
    public alert: AlertController,
  ) {
  }

  createCode(){
    this.createdCode = this.qrData
  }

  scanCode(){
    this.scanner.scan(this.scanOptions).then( scandata => {
      if(scandata.cancelled===false) //test if this is worth it will ya?
      this.scannedCode=scandata.text;
      if(scandata.cancelled===true)
      {const alert = this.alert.create({
        title: 'Escaneo cancelado',
        buttons: [
          {
            text: 'Aceptar',
            handler: data => {}
          }
        ]
      })
      alert.present();}
    })
  }

}
