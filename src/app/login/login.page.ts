import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
Email
Password
loggonInUser
constructor(public authenticateService:AutheticationService, public router:Router) { }
ngOnInit() {
this.authenticateService.getCurrentUser()
  }
  login(){
    this.authenticateService.signInUser(this.Email, this.Password);
    this.authenticateService.getCurrentUser()
    this.loggonInUser = this.authenticateService.userInfo
    this.router.navigateByUrl("/gallery")
     }
}
