import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
firstname:any 
lastname:any
phonenumber:any
Email:any
Password:any
user:User
currentUser
constructor( public router :Router,public autheticationService:AutheticationService) { }
ngOnInit() {
}
signUp(){
this.user = new User(this.firstname,this.lastname,this.phonenumber,this.Email,this.Password);
this.autheticationService.signUpUser(this.user)
this.autheticationService.getCurrentUser()
  }
}
