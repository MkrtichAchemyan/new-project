import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../http.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-education-center',
  templateUrl: './education-center.component.html',
  styleUrls: ['./education-center.component.css'],
})
export class EducationCenterComponent implements OnInit{
  @ViewChild('colstudent') colegeBody: ElementRef;
  user;
  session_id = localStorage.getItem('Authorization');
  first_name;
  last_name;
  api_token;
  education_center_name

  constructor(private router: Router, private postService: HttpService) {
  }


  ngOnInit() {
    let token = localStorage.getItem('Authorization');
    let user_id = localStorage.getItem('id');

    this.postService.getData({token: token, user_id: user_id}).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data['token_api']);
      this.api_token = localStorage.getItem('token');
      this.first_name = data['first_name'];
      this.last_name = data['last_name'];
      this.education_center_name = data['education_center_name']
    }, error => {
      if (error) {
        localStorage.clear();
        this.router.navigate(['/']);
      }
    });


    this.colegeBody.nativeElement.style.minHeight = window.outerHeight + 'px';
  }


  logout() {
    let token = localStorage.getItem('Authorization');
    this.postService.logOut({token: token}).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getStudents() {
    this.router.navigate(['educationcenter/', 'students']);
  }

  getDashboard() {
    this.router.navigate(['educationcenter/']);
  }

  getLectures() {
    this.router.navigate(['educationcenter/', 'lecturers']);
  }
}
