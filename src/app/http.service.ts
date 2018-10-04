import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
url = 'http://192.168.0.128:8000/api/'
  constructor(private http: HttpClient) {}

  getData(data){
   // console.log(data, "*************************************************")
    return this.http.post(`${this.url}is_user/`, data)
  }

  loginUser(data){
    console.log(data)
    return this.http.post(`${this.url}login/`, data)
  }
  addProject(data){
    //console.log(data)
    return this.http.post(`${this.url}projects/`, data)
  }
  addStudent(data){
    console.log(data)
    return this.http.post(`${this.url}add_user/`, data)
  }
  logOut(data){
    console.log(data)
    return this.http.post(`${this.url}logout/`, data)
  }
  getUser(data){
    console.log(data)
    return this.http.post(`${this.url}get_users/`,data)
  }
  delete_user(data){
    console.log(data)
    return this.http.post(`${this.url}delete_user/`, data)
  }
  update_user(data){
    console.log(data)
    return this.http.put(`${this.url}update_user`,data)
  }
  getFacultet(data){
    console.log(data)
    return this.http.post(`${this.url}get_faculties/`,data)
  }
  getBranch(data){
    console.log(data)
    return this.http.post(`${this.url}get_branches/`,data)
  }
}
