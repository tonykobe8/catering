import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import {AngularFireAuth } from "@angular/fire/auth"
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  userInfo:User 
  constructor( private db: AngularFirestore,private fireAuth:AngularFireAuth) { }
  signUpUser(user){
    var database = firebase.database();
      console.log(user);
      let message = ""
    firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password).catch((error) =>{
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);
}).then( results =>{
      console.log(results);
      if(results){
        message = "successfully registered"
        firebase.database().ref('users/' + results.user.uid).set({
          firstname: user.firstname,
          lastname: user.lastname,
          phonenumber: user.phonenumber,
          Email: user.Email
        });
        console.log(message);
      }else{
       }
      });
    }
signInUser(Email,Password){
let user :any
let message = ""
firebase.auth().signInWithEmailAndPassword(Email, Password).catch((error) =>{
var errorCode = error.code;
var errorMessage = error.message;
console.log(errorMessage);
message = errorMessage
}).then(result =>{
user = result
console.log(result);
if(user){
message = user.user.Email + " has successfully logged in"
localStorage.setItem('userID', user.user.uid);
console.log(localStorage.getItem('userID'));
console.log(message);
}else{
console.log(message);
}
return user.user.Email
});
}
getCurrentUser(){
  firebase.auth().onAuthStateChanged((user) =>{
  if (user) {
  var userId = user.uid;
  firebase.database().ref('/users/' + userId).once('value').then( userProfile =>{
  this.userInfo = new User(userProfile.val().firstname,
  userProfile.val().lastname,
   userProfile.val().phonenumber,userProfile.val().Email,"" , userId )
          //console.log(this.userInfo);
        })
      } else {
        console.log("user not logged in");
      }
    });
    }
   // forgotPassword(){
      //var user = firebase.auth().currentUser;
//var newPassword = getASecureRandomPassword();
//user.updatePassword(newPassword).then(function() {
  // Update successful.
//}).catch(function(error) {
  // An error happened.
//});
    }

