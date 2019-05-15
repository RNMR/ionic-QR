import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NavController } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
  templateUrl: 'auth.html',
})
export class AuthPage {

  loginForm: FormGroup;
  constructor( private fb :FormBuilder, public navCtrl: NavController){
    
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  logForm(){
    console.log(this.loginForm.value, this.loginForm)
    this.navCtrl.push(HomePage).then(()=>{console.log("WOW")})
  }
}