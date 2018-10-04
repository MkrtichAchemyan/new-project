import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username;
  password;
  errorSpan = '';
  token
  role
  user_id

  constructor(private route: ActivatedRoute, private newService: HttpService, private router: Router, public http: HttpClient) {
  }

  ngOnInit() {
  };


  logIn(event, user) {
    console.log(event)
    let button1 = event.path[0][2];
    let button2 = event.path[0][3]
    button1.style.display = "none";
    button2.style.display = "block";
    setTimeout(function(){
      button2.style.display = "none";
      button1.style.display = "block";
    },1000);
    this.newService.loginUser(user).subscribe(data => {
          if (data['role']&& data['token']) {
            this.token = data['token'];
            this.role = data['role']
            this.user_id = data['user_id']
             localStorage.setItem("Authorization", this.token)
              localStorage.setItem("role", this.role)
              localStorage.setItem("id", this.user_id)
              switch (this.role) {
                case "Rector":
                  this.router.navigate(['/educationcenter'])
                  break;
                case "Busines":
                  this.router.navigate(['/busines'])
                  break;
                case "Student":
                  this.router.navigate(['/student'])
                  break;
              }
          }
      },
      error => {
      //console.log(error)

        if (error['status'] == 403 && error.error.type == "confirm"){
          this.errorSpan = error.error.message
          return
        }
        else {
          this.errorSpan = ""
        }
        if (error['status'] == 403 && error.error.type == "password"){
          this.errorSpan = error.error.message
          return
        }
        else {
          this.errorSpan = ""
        }
        if (error['status']=== 500) {
          this.errorSpan = "Please fill in the provided feedback blank form!!!"
        }
        else {
          this.errorSpan == ""
        }
        if (error['status']=== 0) {
          this.errorSpan = "Server is not working"
        }
        else {
          this.errorSpan == ""
        }

      }
    )
  }
}
