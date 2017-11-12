import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  name : string;
  nameErro : string;
  email : string;
  emailErro : string;
  phone : number;
  phoneErro : string;
  about : string;
  aboutErro : string;
  password : string;
  passwordErro : string;
  btnDisabled : boolean =true;

  emailInput = new FormControl('', [Validators.required, Validators.email]);
  passwordInput =new FormControl('', [ Validators.minLength(8), Validators.required]);
  nameInput =new FormControl('', [Validators.required]);
  dateInput= new FormControl('', [Validators.required]);
  phoneInput = new FormControl('', [Validators.required]);
  aboutInput = new FormControl('', [Validators.required]);

  constructor() { }
  getErrorMessage() {
    
    
  }
  ngOnInit() {}
  ngDoCheck() {
    if(this.nameInput.touched){
      this.nameErro= this.nameInput.hasError('required') ? 'You must enter a value' :
            '';
    }
    if(this.emailInput.touched){
      this.emailErro= this.emailInput.hasError('required') ? 'You must enter a value' :
        this.emailInput.hasError('email') ? 'Not a valid email' :
            '';
    }
    if(this.passwordInput.touched){
      this.passwordErro= this.passwordInput.hasError('required') ? 'You must enter a value' :
            '';
    }
    if(this.phoneInput.touched){
      this.phoneErro= this.phoneInput.hasError('required') ? 'You must enter a value' :
            '';
    }
    if(this.aboutInput.touched){
      this.aboutErro= this.aboutInput.hasError('required') ? 'You must enter a value' :
            '';
    }
    if(this.aboutErro=='' && this.phoneErro=='' && this.passwordErro=='' && this.emailErro=='' && this.nameErro==''){
      this.btnDisabled = false;
    }
    else{
      this.btnDisabled = true;
    }
    console.log('le resultat de button est ', this.btnDisabled )

  }


 submit(){
    let data = {
      name:this.name,
      email:this.email,
      password:this.password,
      phone:this.phone,
      about:this.about
    }

    localStorage.setItem('user',JSON.stringify(data));

  }
}
