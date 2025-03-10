import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {User} from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser:User ={
    userName:'',
    email:'',
    password:''
  }

  noAuthHeader = {headers:new HttpHeaders({'NoAuth':'True'})};
  constructor(private http:HttpClient) {}

  //http methods

  postUser(user:User){
  return this.http.post(environment.apiBaseUrl+'/register' ,user,this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl+'/authenticate',authCredentials,this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl+'/userProfile');
  }

  //helper methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayload =this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now()/1000;
    else
      return false;
  }

}
